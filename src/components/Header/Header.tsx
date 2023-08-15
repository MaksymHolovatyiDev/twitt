'use client';

import { useState } from 'react';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="header">
      <button type="button" className="header__title">
        Twitt
      </button>
      <nav>
        <ul className="header__navigation">
          <li>
            <p>Posts</p>
          </li>
          <li>
            <p>MyProfile</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
