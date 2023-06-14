import Logo from "../assets/img/Logo.png";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { PhoneNumberDisplay } from './Home/Call';
import { MailIcon } from "./Home/Mail";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setScrolled(true); // Set the navbar background to black on mobile
      } else {
        setScrolled(false); // Reset the navbar background to default on desktop
      }
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Add event listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up event listener
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const navbarStyle = {};

  const logoStyle = {
    width: '200px',
    height: 'auto',
  };

  const socialIconStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Navbar expand="md" style={scrolled ? { ...navbarStyle, ...{ background: 'black' } } : navbarStyle}>
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" style={logoStyle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/services"
              className={activeLink === 'ServicesList' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('ServicesList')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="/#project"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="/#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              About
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <button
              className="vvd"
              style={{
                width: '100%',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => (window.location.href = '/#connect')}
            >
              <span>Let's Connect</span>
              {isHovered && (
                <span
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <PhoneNumberDisplay />
                    <MailIcon />
                  </div>
                </span>
              )}
            </button>
            <div className="social-icon" style={socialIconStyle}>
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
