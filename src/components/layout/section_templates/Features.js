import React from 'react';
import FeatureItem from './FeatureItem';

function Features({ features }) {
  return (
    <section className='features'>
      {features.map((item) => (
        <FeatureItem key={item.feature_id} {...item} />
      ))}
    </section>
  );
}

export default Features;
