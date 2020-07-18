import React from 'react';
import InfraItem from './InfraItem';

function Infrastructure({infrastructures}){

    return (
        <section className='infrastructures sect'>
            <div className="infra-headline">
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
    <p>Phasellus pretium eu ipsum consectetur eleifend.</p>     
            </div>
            <div className="infra-details">

            {
                infrastructures?
                infrastructures.map(item=><InfraItem key={item.id} {...item} />) : null
            }        
            </div>
        </section>
    )
}

export default Infrastructure