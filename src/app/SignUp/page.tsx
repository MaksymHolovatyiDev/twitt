'use client';

import { signUpData } from '@assets/authData/authData';
import Auth from '@components/Auth/Auth';

export default function SignUp() {
  return <Auth text="Sign Up" formData={signUpData} />;
}
