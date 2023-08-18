import { Routes } from '@Routes';

const logInData = [
  {
    name: 'Email address',
    id: 'email',
    type: 'email',
  },
  {
    name: 'Password',
    id: 'password',
    type: 'password',
  },
];

const signUpData = [
  {
    name: 'User name',
    id: 'name',
    type: 'text',
  },
  ...logInData,
];

export const getAuthPageData = (page: string) => {
  switch (page) {
    case Routes.SingUp:
      return {
        formData: signUpData,
        text: 'Sign Up',
        changePageButtonText: 'Log In',
        changePageButtonRoute: Routes.LogIn,
        path: Routes.SingUp,
      };
    default:
      return {
        formData: logInData,
        text: 'Log In',
        changePageButtonText: 'Sign Up',
        changePageButtonRoute: Routes.SingUp,
        path: Routes.LogIn,
      };
  }
};
