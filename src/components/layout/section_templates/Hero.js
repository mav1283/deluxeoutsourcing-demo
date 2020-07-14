import React,{useEffect} from 'react';

function Hero({headline,subheadline,description,cta_name,bg_image}) {

useEffect(()=>{
  console.log(bg_image)
},[bg_image])

  return (
    <section className='hero' style={{backgroundImage:`url(${bg_image})`}}>
      <div className='hero-text-details'>
        <div className='headlines'>

        <h1>{headline}</h1>
        <h3>{subheadline}</h3>
        </div>
        <div className='description'>

        <p>{description}</p>
        </div>
      </div>
      <div className='hero-cta'>
        <button className='hero-cta-btn'>{cta_name}</button>
      </div>
    </section>
  );
}

export default Hero;
