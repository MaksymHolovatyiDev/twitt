import { useEffect } from 'react';
import { Button, Link, TextField } from '@mui/material';
import Image from 'next/image';

import { AuthData, formDataValuesType } from '@Types';
import { useAuthorizationMutation } from '@Redux/services/backendAPI';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setToken } from '@Redux/token/tokenSlice';
import { Routes } from '@Routes';

export default function Auth({ text, formData }: AuthData) {
  const path = usePathname();
  const router = useRouter();
  const SignUpPath = path === Routes.SingUp;

  const [trigger, { isFetching, error, isSuccess, data }]: any =
    useAuthorizationMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.access_token);
      dispatch(setToken(data.access_token));
      router.push(Routes.Default);
    }
  }, [isSuccess]);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const body: any = {};

    for (let i = 0; i < evt.target.length - 1; i++) {
      body[evt.target[i].id] = evt.target[i].value;
    }

    trigger({ path: SignUpPath ? path : '/LogIn', body });
  };
  return (
    <div className="auth__container">
      <Image
        src={require('@assets/images/logo.png')}
        width={500}
        height={500}
        alt="Picture of the author"
        className="auth__logo"
      />
      <main>
        <p className="auth__text">{text}</p>
        <form className="auth__form" onSubmit={onSubmit}>
          <ul className="auth__list">
            {formData.map(el => (
              <li key={el.id}>
                <TextField
                  sx={{ width: '100%' }}
                  id={el.id}
                  label={el.name}
                  type={el.type}
                  variant="standard"
                  inputProps={{ minLength: el.type === 'password' ? 6 : 2 }}
                />
              </li>
            ))}
          </ul>

          <Button sx={{ fontFamily: 'inherit' }} type="submit">
            {text}
          </Button>

          <Link
            component={Button}
            sx={{ fontSize: '14px', textDecoration: 'none' }}
            href={SignUpPath ? Routes.LogIn : Routes.SingUp}
          >
            {SignUpPath ? 'Log In' : 'Sign Up'}
          </Link>
        </form>
      </main>
    </div>
  );
}
