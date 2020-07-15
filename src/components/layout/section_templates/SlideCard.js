import React from 'react';

function SlideCard({ media, message, name, profession }) {
  return (
    <div>
      <div className='card-media'>{media}</div>
      <div className='card-details'>
        <div className='testimonial'>
          <h3>{message}</h3>
        </div>
        <div className='author'>
          <h4>{name}</h4>
          <p>{profession}</p>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
