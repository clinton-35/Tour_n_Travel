import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Feedback = () => {
  const [feedbackText, setFeedbackText] = useState('');
  const [name, setName] = useState('');
  const [serviceUsage, setServiceUsage] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name.trim() === '' || serviceUsage.trim() === '' || feedbackText.trim() === '') {
        alert('Sorry, you need to fill all spaces. Please try again.');
        return;
      }

      const feedbackData = {
        name,
        service_usage: serviceUsage,
        feedback_text: feedbackText,
      };

      const response = await fetch('/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback: feedbackData }),
      });

      setFeedbackText('');
      setName('');
      setServiceUsage('');

      if (response.ok) {
        setSuccessMessage('Thank you for your feedback! Our team will update it on the website.');
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/sign-in', { state: { from: '/feedback' } });
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('/feedbacks');
        if (response.ok) {
          const data = await response.json();
          setFeedbacks(data);
        } else {
          throw new Error('An error occurred while fetching feedbacks.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className='feedbacks'>
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">What do our customers have to say?</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              We're proud to share the voices of our valued travelers! At Vacation Vibes, we strive to provide an exceptional travel experience for everyone. Our community of travel enthusiasts has been raving about our tours, and we're excited to share their stories with you.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle shadow-1-strong" width="150" height="150" alt="Customer Avatar" />
            </div>
            <h5 className="mb-3">Nicole Stephenson</h5>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Amboseli National Park exceeded all expectations! The breathtaking views of Mount Kilimanjaro as a backdrop to the wildlife were a sight to behold. Vacation Vibes organized a fantastic safari experience, where I got up close to elephants, lions, and other majestic animals. The knowledgeable guides shared fascinating insights about the ecosystem and conservation efforts. A big thank you to Vacation Vibes for an incredible adventure in Amboseli!
            </p>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-circle shadow-1-strong" width="150" height="150" alt="Customer Avatar" />
            </div>
            <h5 className="mb-3">Lisa Cudrow</h5>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Seychelles with Vacation Vibes was a dream come true! The islands' natural beauty was unparalleled, with stunning beaches and lush greenery everywhere. The resort they recommended exceeded my expectations, and the excursions to Vallée de Mai and Anse Lazio were unforgettable. The attention to detail and personalized service from Vacation Vibes made the trip seamless and enjoyable. I can't wait to plan my next vacation with them.
            </p>
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circle shadow-1-strong" width="150" height="150" alt="Customer Avatar" />
            </div>         
            <h5 className="mb-3">John Smith</h5>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>Diani Beach was absolutely breathtaking! The crystal-clear turquoise waters and pristine white sand made it a true tropical paradise. The team at Vacation Vibes made sure everything was taken care of, from transportation to accommodation. The snorkeling experience and sunset cruise were the highlights of my trip. Highly recommended!
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <h4 className="mb-4">We'd love to hear your feedback too! Please share your thoughts.</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control"
                  value={serviceUsage}
                  onChange={(e) => setServiceUsage(e.target.value)}
                >
                  <option value="" disabled>
                    Have you used our services before?
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter your feedback"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Feedback
              </button>
            </form>
            {successMessage && (
              <div className="alert alert-success mt-3" role="alert">
                {successMessage}
              </div>
            )}
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <h4>Recent Feedbacks</h4>
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="mb-3">
                <p>{feedback.name}</p>
                <p>{feedback.service_usage}</p>
                <p>{feedback.feedback_text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
