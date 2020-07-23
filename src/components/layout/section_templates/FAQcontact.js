import React from 'react';

function FAQcontact(props) {
  return (
    <section className='faq-contact sect'>
      <div className='faq-headline'>
        <h1>Need some answers?</h1>
        <p>
          If you’ve never offshored before, you’re sure to have a lot of
          questions. We will be happy to answer your questions about from
          pricing models, setting up a team, to anything you need to know about
          outsourcing in the Philippines.
        </p>
        <p>
          Give us a call now on +63 2 34371000 or email us below to speak to one
          of our offshoring specialists. They’ll answer all your questions and
          walk you through the offshoring approach as it would apply to your
          unique business. And if they don’t think offshoring is for you,
          they’ll tell you, straight up.
        </p>
      </div>
      <div className='faq-form-area'>
        <form className='faq-contact-form'>
          <label className='input-type'>
            <input type='text' placeholder='First name' name='fname' />
          </label>
          <label className='input-type'>
            <input type='text' placeholder='Last name' name='lname' />
          </label>
          <label className='input-type'>
            <input type='email' placeholder='Email' name='email' />
          </label>
          <label className='input-type'>
            <input type='text' placeholder='Phone' name='phonenum' />
          </label>
          <label className='input-type'>
            <input type='text' placeholder='Company Name' name='company' />
          </label>

          <label className='select-type'>
            <select>
              <option selected disabled>
                Company size
              </option>
              <option value='lorem ipusm'>lorem ipsum</option>
              <option value='lorem ipsum'>lorem ipsume</option>
            </select>
            <span className='custom-select-arrow'>&#10095;</span>
          </label>

          <label className='select-type'>
            <select>
              <option selected disabled>
                Number of staff
              </option>
              <option value='lorem ipsum'>lorem ipsume</option>
              <option value='lorem ipsum'>lorem ipsume</option>
            </select>
            <span className='custom-select-arrow'>&#10095;</span>
          </label>

          <label className='select-type'>
            <select>
              <option selected disabled>
                Select Country
              </option>
              <option value='Philippines'>Philippines</option>
              <option value='United Kingdom'>United Kingdom</option>
            </select>
            <span className='custom-select-arrow'>&#10095;</span>
          </label>

          <label className='input-type text-area'>
            <textarea placeholder='Question'></textarea>
          </label>
          <label className='check-type'>
            <input type='checkbox' />
            <span className='checkmark'></span>
            <span className='checktext'>
              We value your privacy. You agree to MicroSourcing's collection
              statement
            </span>
          </label>
          <label className='check-type'>
            <input type='checkbox' />
            <span className='checkmark'></span>
            <span className='checktext'>
              Yes, I'd like free access to an in-depth course about offshoring
              to the Philippines.
            </span>
          </label>
          <button className='submit-btn'>Send Email</button>
        </form>
      </div>
    </section>
  );
}

export default FAQcontact;
