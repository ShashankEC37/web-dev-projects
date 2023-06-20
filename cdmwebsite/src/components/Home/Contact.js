import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { name, email, phone, message } = data;
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isPhoneValid = (phone) => {
    // Regular expression for phone number validation
    const regex = /^\d{10,}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setStatus({ success: false, message: 'Please enter a valid email address' });
      return;
    }

    if (!isPhoneValid(phone)) {
      setStatus({ success: false, message: 'Please enter a valid phone number' });
      return;
    }

    setButtonText('Sending....');
    const currentDate = new Date();
    const dateTime = currentDate.toLocaleString();

    try {
      await fetch('https://v1.nocodeapi.com/shashank123/google_sheets/kcFEQVUOUnpKTsym?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[name, email, phone, message, dateTime]])
      });

      setStatus({ success: true, message: 'Message sent successfully' });
      setTimeout(() => {
        setStatus({});
      }, 5000); // Clear the status message after 5 seconds
    } catch (err) {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      console.log(err);
    } finally {
      setButtonText('Send');
      setData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="name">
                          Name <span className="mandatory">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          placeholder="Name"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="email">
                          Email Address <span className="mandatory">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          placeholder="Email Address"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="phone">
                          Phone Number <span className="mandatory">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={phone}
                          placeholder="Phone Number"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1">
                        <label htmlFor="message">
                          Message <span className="mandatory">*</span>
                        </label>
                        <div className="full-width">
                          <textarea
                            name="message"
                            id="message"
                            rows="6"
                            value={message}
                            placeholder="Message"
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col size={12} className="px-1 d-flex justify-content-center align-items-center">
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                    {status.message && (
                      <Row>
                        <Col size={12} className="px-1">
                          <p
                            className={status.success === false ? 'danger' : 'success'}
                            style={{
                              backgroundColor: 'white',
                              color: status.success === false ? 'red' : 'green'
                            }}
                          >
                            {status.message}
                          </p>
                        </Col>
                      </Row>
                    )}
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
