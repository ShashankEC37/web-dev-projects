import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file for styling

const About = () => {
  const pageStyle = {
    background: '#1a0537',
    color: 'white',
    minHeight: '100vh', 
  };

  return (
    <div style={pageStyle}>
      <Container className="about-container">
        <div className="tagline">
          <h1 className="tagline">Empowering Digital Success Through Innovative Solutions</h1>
        </div>
        
        <div className="vision">
          <h1 className="vision">Vision</h1>
          <h1>
            Shaping digital success worldwide through innovative strategies, expert guidance, and trusted partnerships.
          </h1>
        </div>
        
        <div className="section">
          <h1 className="title">Mission</h1>
          <div className="mission-item">
            <h3>1. Delivering excellence:</h3>
            <h4>We strive to provide our clients with the best possible digital marketing experience, from strategy to execution, ensuring exceptional quality and results.</h4>
          </div>
          <br></br>
          <div className="mission-item">
            <h3>2. Tailored solutions for success:</h3>
            <h4>We empower businesses to thrive in the digital world by delivering innovative and effective solutions tailored to their unique needs and goals.</h4>
          </div>
          <br></br>
          <div className="mission-item">
            <h3>3. Building enduring partnerships:</h3>
            <h4>We work tirelessly to build long-lasting relationships with our clients, earning their trust as their trusted partner in achieving their digital marketing objectives.</h4>
          </div>
          <br></br>
          <div className="mission-item">
            <h3>4. Global leader in comprehensive solutions:</h3>
            <h4>Our aim is to be a global leader in digital marketing, offering seamless and comprehensive solutions that reduce organizational stress and meet the diverse needs of our clients.</h4>
          </div>
          <br></br>
          <div className="mission-item">
            <h3>5. Continuous innovation and evolution:</h3>
            <h4>We are committed to continuously innovating and evolving our services to stay ahead of the ever-changing digital landscape and meet the evolving needs of our clients.</h4>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="section">
  <h1 className="title">Values</h1>
  <div className="vision-item">
    <h3>1.Integrity:</h3>
    <h4>We uphold the highest standards of integrity in all our interactions, ensuring transparency, honesty, and ethical conduct in every aspect of our business.</h4>
  </div>
  <div className="vision-item">
    <h3>2.Accountability:</h3>
    <h4>We take full responsibility for our actions and commitments, delivering on our promises and being accountable for the results we achieve for our clients.</h4>
  </div>
  <div className="vision-item">
    <h3>3.Timely Delivery:</h3>
    <h4>We understand the importance of delivering our services on time, respecting deadlines and ensuring timely completion of projects to meet our clients' expectations.</h4>
  </div>
  <div className="vision-item">
    <h3>4.Honesty:</h3>
    <h4>We value open and honest communication, fostering trust and building strong relationships with our clients based on transparency and sincerity.</h4>
  </div>
  <div className="vision-item">
    <h3>Continuous Improvement:</h3>
    <h4>We are dedicated to constant learning and improvement, striving to enhance our skills, knowledge, and expertise to provide the best possible digital solutions for our clients.</h4>
  </div>
</div>

      </Container>
    </div>
  );
};

export default About;
