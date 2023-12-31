import React, { useState } from 'react';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to Rails backend endpoint
      const response = await fetch('/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      setName('');
      setEmail('');
      setMessage('');

      if (response.ok) {
        setSuccessMessage('Thank you for your message. Our team will come back to you shortly!');
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          setErrors(responseData.errors);
        } else {
          console.error('contact submission failed');
        }
      }
    } catch (error) {
      console.error(error);
      setErrors(['An error occurred. Please try again.']);
    }
  };

  return (
    <div className="contacts">
      {errors.length > 0 && (
        <div className="error-container">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p className="text-center w-responsive mx-auto mb-3">
          Do you have any questions? Please do not hesitate to contact us directly.
          Our team will come back to you within a matter of hours to help you.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Send
                </button>
              </div>
              {successMessage && (
                <div className="card mt-4">
                  <div className="card-body">
                    <p className="card-text">{successMessage}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
