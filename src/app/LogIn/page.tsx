'use client';

import Auth from '@components/Auth/Auth';
import { logInData } from '@assets/authData/authData';

export default function LogIn() {
  return <Auth text="Log In" formData={logInData} />;
}
