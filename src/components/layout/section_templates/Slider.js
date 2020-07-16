import React, { useState, useEffect } from 'react';
import SlideCard from './SlideCard';

function Slider({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  // const [trainStyle, setTrainStyle] = useState({ right: 0 });
  // const scontainer = document.getElementById('s-container');

  const handlePrevious = () => {
    if (currentSlideIndex > 1) {
      setCurrentSlideIndex((prevState) => prevState - 1);
      // setTrainStyle((prevState) => prevState - `${scontainer.clientWidth}px`);
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length) {
      setCurrentSlideIndex((prevState) => prevState + 1);
      // setTrainStyle((prevState) => prevState + `${scontainer.clientWidth}px`);
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
      <div id='s-container' className='slides-container'>
        <div
          id='s-train'
          className='slide-train'
          style={{
            transform: `translateX(-${
              currentSlideIndex * (100 / slides.legnth)
            }%)`,
          }}
        >
          {slides.map((slide, i) => (
            <SlideCard
              key={slide.id}
              currentSlideIndex={currentSlideIndex}
              slideIndex={i + 1}
              {...slide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
