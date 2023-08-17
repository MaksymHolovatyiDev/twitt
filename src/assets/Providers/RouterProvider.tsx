'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

import { getToken } from '@Redux/token/tokenSelector';
import LogIn from '@app/LogIn/page';
import Home from '@app/page';

export default function RouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useSelector(getToken);
  const path = usePathname();
  const logInPage = path === '/LogIn';
  const singUpPage = path === '/SignUp';

  if (token && (logInPage || singUpPage)) return <Home />;
  if (!token && !logInPage && !singUpPage) return <LogIn />;

  return <>{children}</>;
}
