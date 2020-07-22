import React from "react";

function FAQcontact(props) {
  return (
    <section className="faq-contact sect">
      <div className="faq-headline">
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
      <form className="faq-contact-form">
        <p>
          <input type="text" placeholder="First name" />
        </p>
        <p>
          <input type="text" placeholder="Last name" />
        </p>
        <p>
          <input type="text" placeholder="Your company" />
        </p>
        <p>
          <input type="text" placeholder="Phone" />
        </p>
        <p>
          <input type="text" placeholder="Email" />
        </p>

        <select placeholder="Company size">
          <option value="lorem ipusm">lorem ipsum</option>
          <option value="lorem ipsum">lorem ipsume</option>
        </select>

        <select placeholder="Number of staff">
          <option value="lorem ipsum">lorem ipsume</option>
          <option value="lorem ipsum">lorem ipsume</option>
        </select>

        <select placeholder="What country?">
          <option value="Philippines">Philippines</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <textarea placeholder="Question"></textarea>

        <div className="form-group check">
          <input type="checkbox" />
          <label>
            We value your privacy. You agree to MicroSourcing's collection
            statement
          </label>
        </div>
        <div className="form-group check">
          <input type="checkbox" />
          <label>
            Yes, I'd like free access to an in-depth course about offshoring to
            the Philippines.
          </label>
        </div>
        <button className="submit-btn">Send Email</button>
      </form>
    </section>
  );
}

export default FAQcontact;
