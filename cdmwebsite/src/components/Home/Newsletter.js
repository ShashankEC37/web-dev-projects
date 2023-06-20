import React, { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "./Newsletter.css"
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const isEmailValid = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isEmailValid(email)) {
      setStatus("sending");
  
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/shashank123/google_sheets/wSwDTirCRwoiZRHB?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([[ email ]]),
          }
        );
  
        if (response.ok) {
          setStatus("success");
          setMessage("Subscription successful!");
          setEmail("");
        } else {
          setStatus("error");
          setMessage("An error occurred. Please try again later.");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
        setMessage("An error occurred. Please try again later.");
      }
    } else {
      setStatus("error");
      setMessage("Please enter a valid email address.");
    }
  };
  
  return (
<div className="newsletter-container">
  <Row>
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <h5 className="newsletter-heading">
          Subscribe to our Newsletter
          <br /> & Never miss the latest updates
        </h5>
        {status === "sending" && <Alert>Sending...</Alert>}
        {status === "error" && <Alert variant="danger">{message}</Alert>}
        {status === "success" && <Alert variant="success">{message}</Alert>}
        <form onSubmit={handleSubmit}>
          <Row className="newsletter-row">
            <Col xs={12}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
              </div>
            </Col>
          </Row>
          <Row className="newsletter-row">
            <Col xs={12}>
              <div className="submit-col">
                <div className="submit-btn">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </Col>
  </Row>
</div>



  );
};

export default Newsletter;
