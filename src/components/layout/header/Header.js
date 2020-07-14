import React from 'react';
import Logo from '../logo/Logo';
import Navmenu from '../navmenu/Navmenu';

function Header() {
  return (
    <header className='app-header'>
      <Logo />
      <Navmenu />
    </header>
  );
}

export default Header;
