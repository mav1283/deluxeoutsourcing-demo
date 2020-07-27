import React from "react";

function Hero({ headline, subheadline, description, cta_name, bg_image }) {
  return (
    <section
      className="hero sect"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="hero-text-details">
        <div className="headlines">
          <h1>{headline}</h1>
          <h2>{subheadline}</h2>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="hero-cta">
        <button className="hero-cta-btn">{cta_name}</button>
      </div>
    </section>
  );
}

export default Hero;
