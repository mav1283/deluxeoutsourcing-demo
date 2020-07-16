import React from 'react';
import {Link} from 'react-router-dom';

function FeatureItem({feature_icon,feature_title,feature_description, feature_url,feature_cta}){
    return (
        <div className='feature'>
            <div className="feature-icon">{feature_icon}</div>
            <div className="feature-details">
                <h2 className="feature-tite">{feature_title}</h2>
                <p className="feature-description">{feature_description}</p>
    <Link to={`/${feature_url}`} className='feature-cta'>{feature_cta}<span className="feature-icon">&#10095;</span></Link>
            </div>
        </div>
    )
}

export default FeatureItem