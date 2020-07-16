import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='app-logo'>
      <Link to='/'><span className="green-highlight">delux</span>outsourcing</Link>
    </div>
  );
}

export default Logo;
