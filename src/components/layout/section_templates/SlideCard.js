import React from 'react';

function SlideCard({
  currentSlideIndex,
  slideIndex,
  id,
  media,
  message,
  name,
  profession,
}) {
  return (
    <div
      className={slideIndex == currentSlideIndex ? 'slide active' : 'slide'}
      id={id}
    >
      <div className='card-media'>
        <figure>
          <img src={media} alt={name} />
        </figure>
      </div>
      <div className='card-details'>
        <div className='testimonial'>
          <div className='quote'>
            <q>{message}</q>
          </div>
          <div className='author'>
            <h4>{name}</h4>
            <p>
              <i>{profession}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
