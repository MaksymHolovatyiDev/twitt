import { useEffect } from 'react';
import { Button, Link, TextField } from '@mui/material';

import { useAuthorizationMutation } from '@Redux/services/backendAPI';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setToken } from '@Redux/token/tokenSlice';
import { Routes } from '@Routes';
import { getAuthPageData } from './authData/authData';

export default function Auth() {
  const path = usePathname();
  const router = useRouter();
  const authData = getAuthPageData(path);

  const [trigger, { isSuccess, data }]: any = useAuthorizationMutation();
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

    trigger({ path: authData.path, body });
  };

  return (
    <div className="auth__container">
      <p className="auth__logo">Twitt</p>
      <main>
        <p className="auth__text">{authData.text}</p>
        <form className="auth__form" onSubmit={onSubmit}>
          <ul className="auth__list">
            {authData.formData.map(el => (
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
            {authData.text}
          </Button>

          <Link
            component={Button}
            sx={{ fontSize: '14px', textDecoration: 'none' }}
            href={authData.changePageButtonRoute}
          >
            {authData.changePageButtonText}
          </Link>
        </form>
      </main>
    </div>
  );
}
