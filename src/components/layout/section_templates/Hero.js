import React from 'react';

function Hero(props) {
  return (
    <div>
      <div className='hero-text-details'>
        <h1>{props.heading}</h1>
        <h3>{props.subheading}</h3>
        <p>{props.description}</p>
      </div>
      <div className='hero-cta'>
        <button className='hero-cta-btn'>{props.cta_name}</button>
      </div>
    </div>
  );
}

export default Hero;
