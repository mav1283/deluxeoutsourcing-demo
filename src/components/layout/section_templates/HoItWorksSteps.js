import React from "react";
import HiwStep from "./HiwStep";

function HowItWorksSteps({ hiwsteps }) {
  return (
    <section className="hiw-steps sect">
      <div className="hiw-steps-headline">
        <h1>Lorem Ipsum Dolor Sit Amet</h1>
      </div>
      <div className="steps">
        {hiwsteps.map((item) => (
          <HiwStep key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSteps;
