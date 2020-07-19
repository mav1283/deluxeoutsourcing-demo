import React,{createPortal} from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';


function NavmenuMobile() {
  return (
    
    <nav className='app-nav-mobile'>
      <NavLink to='/why-deluxe'>
        Why deluxe<span className='nav-icon'>&#10095;</span>
      </NavLink>
      <NavLink to='/how-it-works'>
        How it works<span className='nav-icon'>&#10095;</span>
      </NavLink>
      <NavLink to='/build-your-team'>
        Build your team<span className='nav-icon'>&#10095;</span>
      </NavLink>
      <NavLink to='/learn'>
        Learn<span className='nav-icon'>&#10095;</span>
      </NavLink>
      <NavLink to='/careers'>
        Career<span className='nav-icon'>&#10095;</span>
      </NavLink>
      <NavLink to='/about-us'>
        About us<span className='nav-icon'>&#10095;</span>
      </NavLink>
      <NavLink to='contact-us'>
        <span className='nav-icon-front'>
          <FaPhone />
        </span>
        Contact us
      </NavLink>
    </nav>
  );
}

export default NavmenuMobile;
