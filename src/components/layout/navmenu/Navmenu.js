import React from 'react';
import { NavLink } from 'react-router-dom';

function Navmenu() {
  return (
    <nav className='app-nav'>
      <NavLink to='/why-offshore'>Whyoffshore</NavLink>
      <NavLink to='/how-it-works'>How it works</NavLink>
      <NavLink to='/build-your-team'>Build your team</NavLink>
      <NavLink to='/learn'>Learn</NavLink>
      <NavLink to='/careers'>Career</NavLink>
      <NavLink to='/about-us'>About us</NavLink>
      <NavLink to='contact-us'>Contact us</NavLink>
    </nav>
  );
}

export default Navmenu;
