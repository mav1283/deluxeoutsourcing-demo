import React from 'react';
import InfraItem from './InfraItem';

function Infrastructure({infrastructures}){

    return (
        <section className='infrastructure'>
            {
                infrastructures?
                infrastructures.map(item=><InfraItem key={item.id} {...item} />) : null
            }        
        </section>
    )
}

export default Infrastructure