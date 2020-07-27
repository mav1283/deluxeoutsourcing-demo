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
      <div className="faq-form-area">
        <form className="faq-contact-form">
          <label htmlFor="fname" className="input-type">
            <input
              type="text"
              placeholder="First name"
              id="fname"
              name="fname"
            />
          </label>
          <label htmlFor="lname" className="input-type">
            <input
              type="text"
              placeholder="Last name"
              id="lname"
              name="lname"
            />
          </label>
          <label htmlFor="email" className="input-type">
            <input type="email" placeholder="Email" id="email" name="email" />
          </label>
          <label htmlFor="phonenum" className="input-type">
            <input
              type="text"
              placeholder="Phone"
              id="phonenum"
              name="phonenum"
            />
          </label>
          <label htmlFor="company" className="input-type">
            <input
              type="text"
              placeholder="Company Name"
              id="company"
              name="company"
            />
          </label>

          <label htmlFor="select-company-size" className="select-type">
            <select id="select-company-size">
              <option defaultValue disabled>
                Company size
              </option>
              <option value="lorem ipusm">lorem ipsum</option>
              <option value="lorem ipsum">lorem ipsume</option>
            </select>
            <span className="custom-select-arrow">&#10095;</span>
          </label>

          <label htmlFor="select-staff-number" className="select-type">
            <select id="select-staff-number">
              <option defaultValue disabled>
                Number of staff
              </option>
              <option value="lorem ipsum">lorem ipsume</option>
              <option value="lorem ipsum">lorem ipsume</option>
            </select>
            <span className="custom-select-arrow">&#10095;</span>
          </label>

          <label htmlFor="select-country" className="select-type">
            <select id="select-country">
              <option defaultValue disabled>
                Select Country
              </option>
              <option value="Philippines">Philippines</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            <span className="custom-select-arrow">&#10095;</span>
          </label>

          <label htmlFor="question" className="input-type text-area">
            <textarea id="question" placeholder="Question"></textarea>
          </label>
          <label htmlFor="check-agreement" className="check-type">
            <input id="check-agreement" type="checkbox" />
            <span className="checkmark"></span>
            <span className="checktext">
              We value your privacy. You agree to DeluxSourcing's collection
              statement
            </span>
          </label>
          <label htmlFor="check-free-access" className="check-type">
            <input id="check-free-access" type="checkbox" />
            <span className="checkmark"></span>
            <span className="checktext">
              Yes, I'd like free access to an in-depth course about offshoring
              to the Philippines.
            </span>
          </label>
          <button name="submit-btn" className="submit-btn">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

export default FAQcontact;
