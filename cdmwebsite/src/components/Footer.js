import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../components/Home/MailchimpForm";
import logo from "../assets/img/Logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const senderEmail = 'param@creativedigitalmedia.co.in';
  const emailSubject = 'Hello Creative Digital Media!'; // Optional: You can set a default email subject

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(emailSubject)}`;
    window.location.href = mailtoLink;
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <br></br>
            
            <br></br>
            <h5>
      <span
        onClick={handleEmailClick}
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
      >
        param@creativedigitalmedia.co.in
      </span>
    </h5>
            <h5>Address</h5>
            <p>#73, 3rd Floor, Shreelekha Complex, WOC, Mahalakshmipuram, Bengaluru, Karnataka 560086</p>
          </Col>
          

          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
