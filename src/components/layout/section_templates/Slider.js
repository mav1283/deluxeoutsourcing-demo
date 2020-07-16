import React, { useState, useEffect } from 'react';
import SlideCard from './SlideCard';

function Slider({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    console.log(currentSlideIndex);
  }, [currentSlideIndex]);

  return (
    <section className='slider'>
      <div className='slider-buttons'>
        <button onClick={handlePrevious}>&#10094;</button>
        <button onClick={handleNext}>&#10095;</button>
      </div>
      <div className='slides-container'>
        <div className='slide-train'>
          {slides.map((slide, i) => (
            <SlideCard
              key={slide.id}
              currentSlideIndex={currentSlideIndex}
              slideIndex={i}
              {...slide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
