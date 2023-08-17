import { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import Image from 'next/image';

import { AuthData, formDataValuesType } from '@Types';
import { useAuthorizationMutation } from '@Redux/services/backendAPI';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setToken } from '@Redux/token/tokenSlice';

export default function Auth({ text, formData }: AuthData) {
  const path = usePathname();
  const router = useRouter();
  const SignUpPath = path === '/SignUp';

  const [trigger, { isFetching, error, isSuccess, data }]: any =
    useAuthorizationMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.access_token);
      dispatch(setToken(data.access_token));
      router.push('/');
    }
  }, [isSuccess]);

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    const formDataValues: formDataValuesType = {
      email: evt.target.email.value,
      password: evt.target.password.value,
    };

    if (SignUpPath) formDataValues.name = evt.target.name.value;

    trigger({ path: SignUpPath ? path : '/LogIn', body: formDataValues });
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
          {formData.map(el => (
            <TextField
              id={el.id}
              label={el.name}
              type={el.type}
              variant="standard"
              inputProps={{ minLength: el.type === 'password' ? 6 : 2 }}
            />
          ))}

          <Button type="submit">{text}</Button>
          <Button href={SignUpPath ? '/LogIn' : '/SignUp'}>
            {SignUpPath ? 'Log In' : 'Sign Up'}
          </Button>
        </form>
      </main>
    </div>
  );
}
