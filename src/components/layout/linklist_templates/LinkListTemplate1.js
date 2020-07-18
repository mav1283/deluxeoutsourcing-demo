import React from 'react';
import { Link } from 'react-router-dom';

function LinkListTemplate1({ id, title, subtitle, sublinks }) {
  return (
    <div className='link-list-template-1'>
      <h3 className='link-list-header'>{title}</h3>
      <div className='link-list-section'>
        {subtitle && <h5 className='link-list-sub-header'>{subtitle}</h5>}
        <ul className='link-list'>
          {sublinks.map((item) => {
            return (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LinkListTemplate1;
