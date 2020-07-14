import React from 'react';
import Hero from '../layout/section_templates/Hero';
import bgImage from '../../assets/images/austin-distel-97HfVpyNR1M-unsplash.jpg';
import {v4} from 'uuid';
import {GiPayMoney} from 'react-icons/gi';
import {BsBarChartFill} from 'react-icons/bs';
import {FaShippingFast} from 'react-icons/fa';
import Features from '../layout/section_templates/Features';

function Home() {
const features = [
  {
    feature_id:v4(),
    feature_title: 'Feature 1',
    feature_description: 'Lorem ipsum dolor sit amet, verbatim',
    feature_cta: 'Click here for more',
    feature_icon: <GiPayMoney />
  },
  {
    feature_id:v4(),
    feature_title: 'Feature 2',
    feature_description: 'Lorem ipsum dolor sit amet, verbatim',
    feature_cta: 'Click here for more',
    feature_icon: <BsBarChartFill />
  },
  {
    feature_id:v4(),
    feature_title: 'Feature 3',
    feature_description: 'Lorem ipsum dolor sit amet, verbatim',
    feature_cta: 'Click here for more',
    feature_icon: <FaShippingFast />
  },
]
  return (<div>
<Hero headline='Lorem Ipsum Dolor Sit Amet, Verbatim' subheadline='This is a sub headline' description='consectetur adipiscing elit. Curabitur elementum in eros nec tempor. Curabitur eget purus rhoncus, ultricies erat id, vehicula lectus.' cta_name='this is a call to action' bg_image={bgImage}/>
<Features features={features} />
  </div>);
}

export default Home;
