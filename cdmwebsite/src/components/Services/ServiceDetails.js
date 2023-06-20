import React, { useState } from 'react';
import './ServiceDetails.css';
import { ArrowDropUp } from '@mui/icons-material';
import { services } from './ServiceList';

const ServiceCard = ({ title, image, plans }) => {
  const [expandedPlan, setExpandedPlan] = useState(null);

  const handlePlanHover = (planIndex) => {
    setExpandedPlan(planIndex);
  };

  const handlePlanLeave = () => {
    setExpandedPlan(null);
  };

  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card__image" />
      <h2 className="service-card__title">{title}</h2>
      <ul className="service-card__plans">
        {plans.map((plan, index) => (
          <li
            key={plan.name}
            className={`service-card__plan ${expandedPlan === index ? 'expanded' : ''}`}
            onMouseEnter={() => handlePlanHover(index)}
            onMouseLeave={handlePlanLeave}
          >
            <div className="plan-header">
              <div className="plan-info">
                <h3>
                  {plan.name}{' '}
                  <ArrowDropUp
                    style={{ transform: `rotate(${expandedPlan === index ? '0deg' : '180deg'})` }}
                  />
                </h3>
              </div>
            </div>

           
            <ul className="service-card__features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceDetails = () => {
  return (
    <div className="container" style={{  paddingTop: '200px' ,paddingBottom:'200px'}}>
      <div className="ServicesList">
        <h1>Our Services</h1>
        <div className="service-cards">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} image={service.image} plans={service.plans} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
