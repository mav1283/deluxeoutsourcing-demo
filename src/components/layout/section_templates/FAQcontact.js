import React from 'react';

function FAQcontact(props){
    return (
        <section className='faq-contact'>
            <div className="faq-headline">
            <h1>Need some answers?</h1>
            <p>If you’ve never offshored before, you’re sure to have a lot of questions. We will be happy to answer your questions about from pricing models, setting up a team, to anything you need to know about outsourcing in the Philippines.</p>
            <p>Give us a call now on +63 2 34371000 or email us below to speak to one of our offshoring specialists. They’ll answer all your questions and walk you through the offshoring approach as it would apply to your unique business. And if they don’t think offshoring is for you, they’ll tell you, straight up.</p>
            </div>
            <form className="faq-contact-form">
                <label htmlFor="" className="form-group"><input type="text" placeholder="First name"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="Last name"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="Your company"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="Phone"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="Email"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="Company size"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="Number of staff"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="What country?"/></label>
                <label htmlFor="" className="form-group"><input type="text" placeholder="Question"/></label>
            </form>
        </section>
    )
}

export default FAQcontact