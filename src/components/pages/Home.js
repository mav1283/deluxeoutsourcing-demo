import React from 'react';
import Hero from '../layout/section_templates/Hero';
import bgImage from '../../assets/images/austin-distel-97HfVpyNR1M-unsplash.jpg';

import Features from '../layout/section_templates/Features';
import Slider from '../layout/section_templates/Slider';
import Infrastructure from '../layout/section_templates/Infrastructure';
import Charts from '../layout/section_templates/Charts';
import HowItWorksSteps from '../layout/section_templates/HoItWorksSteps';
import FAQcontact from '../layout/section_templates/FAQcontact';
import Sponsors from '../layout/section_templates/Sponsors';

/* Dummies*/
import features from '../dummies/features';
import slides from '../dummies/slides';
import infrastuctures from '../dummies/infrastructures';
import sponsors from '../dummies/sponsors';

function Home() {
  

  return (
    <div>
      <Hero
        headline='Lorem Ipsum Dolor Sit Amet, Verbatim'
        subheadline='This is a sub headline'
        description='consectetur adipiscing elit. Curabitur elementum in eros nec tempor. Curabitur eget purus rhoncus, ultricies erat id, vehicula lectus.'
        cta_name='this is a call to action'
        bg_image={bgImage}
      />
      <Features features={features} />
      <Slider slides={slides} />
      <Infrastructure infrastructures={infrastuctures}/>
      <Charts />
      <HowItWorksSteps />
      <FAQcontact />
      <Sponsors sponsors={sponsors} />
    </div>
  );
}

export default Home;
