import React from 'react';

function Sponsors({sponsors}){
    return (
        <section className='sponsors'>
            {
                sponsors.map(sponsor=><img key={sponsor.id} src={sponsor.url} alt={sponsor.description}/>)
            }
        </section>
    )
}

export default Sponsors;