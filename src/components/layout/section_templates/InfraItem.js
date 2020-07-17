import React from 'react';

function InfraItem({icon,value,description}){
    return (
        <div className="infra-item">
    <div className="infra-icon">{icon}</div>
    <div className="infra-value">{value}</div>
    <div className="infra-description">{description}</div>
            </div>
    )
}

export default InfraItem