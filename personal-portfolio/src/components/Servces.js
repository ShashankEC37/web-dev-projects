import WebDevelopment from "../assets/img/WebDevelopment.svg"
import DigitalMarketing from "../assets/img/digital marketing.png"
import SocialMedia from "../assets/img/socialmeda.png"
import Brainding from "../assets/img/Branding.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="services" id="service">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Services</h2>
                        <p>One Stop Solution for all your digital needs</p>
                       <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
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
    <h5>Brand Building</h5>
  </div>
</Carousel>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
