'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import LogIn from '@app/LogIn/page';
import Home from '@app/page';
import { useGetTokenState } from '@Redux/token/tokenSelector';

export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useGetTokenState();
  const path = usePathname();
  const logInPage = path === '/LogIn';
  const singUpPage = path === '/SignUp';

  if (token && (logInPage || singUpPage)) return <Home />;
  if (!token && !logInPage && !singUpPage) return <LogIn />;

  return <>{children}</>;
}
