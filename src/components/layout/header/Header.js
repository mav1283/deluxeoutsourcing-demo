import React from 'react';
import Logo from '../logo/Logo';
import Navmenu from '../navmenu/Navmenu';

function Header() {
  return (
    <header className='app-header'>
      <div className='head-top-section'>
        <p>Philippines: +6323431000</p>
      </div>
      <div className='head-bottom-section'>
        <Logo />
        <Navmenu />
      </div>
    </header>
  );
}

export default Header;
