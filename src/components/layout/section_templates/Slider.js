import React, { useState } from 'react';
import SlideCard from './SlideCard';

function Slider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevious = () => {
    if (slideIndex > 0) {
      setSlideIndex((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((prevState) => prevState + 1);
    }
  };

  return (
    <section className='slider'>
      <div className='slider-buttons'>
        <button onClick={handlePrevious}>&#x3c;</button>
        <button onClick={handleNext}>&#x3e;</button>
      </div>
      <div className='slides-container'>
        <div className='slide-train'>
          {slides.map((slide) => (
            <SlideCard key={slide.id} {...slide} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
