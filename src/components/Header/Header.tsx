'use client';

import { Routes } from '@Routes';
import MainModal from '@components/MainModal/MainModal';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className="header">
        <button type="button" className="header__title" onClick={onButtonClick}>
          Twitt
        </button>
        <nav>
          <ul className="header__navigation">
            <li>
              <Link className="header__link" href={Routes.Default}>
                Posts
              </Link>
            </li>
            <li>
              <Link className="header__link" href={Routes.Profile}>
                MyProfile
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <MainModal data={{ isOpen, setIsOpen }} />
    </>
  );
}
