import React from 'react';
import InfraItem from './InfraItem';

function Infrastructure({infrastructures}){

    return (
        <section className='infrastructure'>
            {
                infrastructures.map(item=><InfraItem key={item.id} {...item} />)
            }        
        </section>
    )
}

export default Infrastructure