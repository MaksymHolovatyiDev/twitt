'use client';

import { signUpData } from '@components/Auth/authData/authData';
import Auth from '@components/Auth/Auth';

export default function SignUp() {
  return <Auth text="Sign Up" formData={signUpData} />;
}
