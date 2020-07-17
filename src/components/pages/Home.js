import React from 'react';
import Hero from '../layout/section_templates/Hero';
import bgImage from '../../assets/images/austin-distel-97HfVpyNR1M-unsplash.jpg';
import { v4 } from 'uuid';
import { GiPayMoney } from 'react-icons/gi';
import { BsBarChartFill } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import Features from '../layout/section_templates/Features';
import Slider from '../layout/section_templates/Slider';
import Infrastructure from '../layout/section_templates/Infrastructure';
import Charts from '../layout/section_templates/Charts';
import HowItWorksSteps from '../layout/section_templates/HoItWorksSteps';
import FAQcontact from '../layout/section_templates/FAQcontact';

function Home() {
  const features = [
    {
      feature_id: v4(),
      feature_title: 'Feature 1',
      feature_description: 'Lorem ipsum dolor sit amet, verbatim',
      feature_cta: 'Click here for more',
      feature_icon: <GiPayMoney />,
    },
    {
      feature_id: v4(),
      feature_title: 'Feature 2',
      feature_description: 'Lorem ipsum dolor sit amet, verbatim',
      feature_cta: 'Click here for more',
      feature_icon: <BsBarChartFill />,
    },
    {
      feature_id: v4(),
      feature_title: 'Feature 3',
      feature_description: 'Lorem ipsum dolor sit amet, verbatim',
      feature_cta: 'Click here for more',
      feature_icon: <FaShippingFast />,
    },
  ];

  const slides = [
    {
      id: v4(),
      media:
        'https://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png',
      message: 'The true sign of intelligence is not knowledge but imagination',
      name: 'Albert Einstein',
      profession: 'Physicist',
    },
    {
      id: v4(),
      media:
        'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg',
      message:
        'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
      name: 'Michael Jordan',
      profession: 'NBA Superstar',
    },
    {
      id: v4(),
      media:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/498px-Beethoven.jpg',
      message:
        'Music should strike fire from the heart of man, and bring tears from the eyes of woman.',
      name: 'Ludwig Van Beethoven',
      profession: 'Composer',
    },
  ];

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
      <Infrastructure />
      <Charts />
      <HowItWorksSteps />
      <FAQcontact />
    </div>
  );
}

export default Home;
