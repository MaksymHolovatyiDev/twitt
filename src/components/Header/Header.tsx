'use client';

import { setToken } from '@Redux/token/tokenSlice';
import { Routes } from '@Routes';
import CreatePost from '@components/CreatePost/CreatePost';
import MainModal from '@components/MainModal/MainModal';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHeaderData } from './headerData/headerData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const path = usePathname();
  const headerData = getHeaderData(path);

  const onButtonClick = (evt: any) => {
    evt.target.blur();
    setIsOpen(true);
  };

  const onExit = () => {
    dispatch(setToken(''));
    localStorage.removeItem('token');
    router.push(Routes.LogIn);
  };

  return (
    <>
      <header className="header">
        <button type="button" className="header__title" onClick={onButtonClick}>
          Twitt
        </button>
        <nav className="header__navigation">
          <Link className="header__link" href={headerData.path}>
            {headerData.text}
          </Link>

          <button className="header__button" onClick={onExit}>
            Exit
          </button>
        </nav>
      </header>
      <MainModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <CreatePost setIsOpen={setIsOpen} />
      </MainModal>
    </>
  );
}
