import React from 'react';

function Certificates({ certificates }) {
  return (
    <section className='certificates sect'>
      <div className='certificates-section-list'>
        {certificates.map((certificate) => (
          <img
            key={certificate.id}
            src={certificate.url}
            alt={certificate.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
