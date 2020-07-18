import React from 'react';
import {v4} from 'uuid';
import { GiPayMoney } from 'react-icons/gi';
import { BsBarChartFill } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
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

  export default features;