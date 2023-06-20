import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WebDevelopment from "../../assets/img/WebDevelopment.svg";
import DigitalMarketing from "../../assets/img/digital marketing.png";
import SocialMedia from "../../assets/img/socialmeda.png";
import Brainding from "../../assets/img/Branding.png";
import DModeling from "../../assets/img/3D modeling.png";
import Video from "../../assets/img/Video.png";
import colorSharp from "../../assets/img/color-sharp.png";


export const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };
  const carouselStyle = {
    background: '#ffffff',
  };
  return (
    <section className="services" id="service">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Services</h2>
              <p>One Stop Solution for all your digital needs</p>
              <br />
    
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} className="owl-carousel owl-theme skill-slider" style={carouselStyle}>
      <div className="item">
        <img src={DigitalMarketing} style={{ width: '200px', height: '200px' }} alt="Image" />
        <h5>Digital Marketing</h5>
      </div>
      <div className="item">
        <img src={WebDevelopment} style={{ width: '200px', height: '200px' }} alt="Image" />
        <h5>Web Development</h5>
      </div>
      <div className="item">
        <img src={SocialMedia} style={{ width: '200px', height: '200px' }} alt="Image" />
        <h5>Social Media Management</h5>
      </div>
      <div className="item">
        <img src={Brainding} style={{ width: '200px', height: '200px' }} alt="Image" />
        <h5>Branding</h5>
      </div>
      <div className="item">
        <img src={Video} style={{ width: '200px', height: '200px' }} alt="Image" />
        <h5>Videography and Photography</h5>
      </div>
      <div className="item">
        <img src={DModeling} style={{ width: '200px', height: '200px' }} alt="Image" />
        <h5>3-D Modeling</h5>
      </div>
    </Carousel>
    <br></br>
    <button
                style={{
                  backgroundColor: 'purple',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onClick={() => (window.location.href = '/services')}
              >
                Know More
              </button>
                
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};


