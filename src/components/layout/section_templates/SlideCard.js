import React from "react";

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
      className={slideIndex == currentSlideIndex ? "slide active" : "slide"}
      id={id}
    >
      <div className="card-media">
        <div
          className="media-image"
          style={{ backgroundImage: `url(${media})` }}
        ></div>
      </div>
      <div className="card-details">
        <div className="testimonial">
          <div className="quote">
            <blockquote>{message}</blockquote>
          </div>
          <div className="author">
            <div className="tick-space">~</div>
            <div className="author-details">
              <h4> {name}</h4>
              <p>
                <i>{profession}</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
