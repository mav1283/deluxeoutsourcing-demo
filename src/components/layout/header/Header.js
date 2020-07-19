import React, { useEffect } from 'react';
import Logo from '../logo/Logo';
import NavmenuDesktop from '../navmenu/NavmenuDesktop';

function Header() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <header className='app-header'>
      <div className='head-top-section'>
        <p>Philippines: +6323431000</p>
      </div>
      <div className='head-bottom-section'>
        <Logo />
        <NavmenuDesktop />
      </div>
    </header>
  );
}

export default Header;
