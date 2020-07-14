import React from 'react';
import FeatureItem from './FeatureItem';

function Features({features}){
    return (
        <div className='features'>
            {
                features.map(item=><FeatureItem key={item.feature_id} {...item}/>)
            }
        </div>
    )
}

export default Features