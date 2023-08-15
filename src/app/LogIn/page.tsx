'use client';

import Auth from '@components/Auth/Auth';
import { logInData } from '@components/Auth/authData/authData';

export default function LogIn() {
  return <Auth text="Log In" formData={logInData} />;
}
