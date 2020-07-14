import React from 'react';
import { Link } from 'react-router-dom';
import LinkListTemplate1 from '../linklist_templates/LinkListTemplate1';
import footContent from './footLinks';

function Footer() {
  

  return (
    <footer className='app-footer'>
      <div className='foot-top-section'>
        {footContent.map((item) => {
          return (
            <LinkListTemplate1 key={item.id} {...item} />
          );
        })}
      </div>
      <div className='foot-bottom-section'>
        <p>Deluxe Sourcing is proudly owned by Ralph</p>
        <p className='copyright'>Copyright &copy; 2020. All Rights Reserved.</p>
        <p className='policy-terms-sitemap'>
          <Link to='/policy'>Policy</Link> |
          <Link to='/terms-of-use'>Terms of use</Link> |
          <Link to='/sitemap'>Sitemap</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
