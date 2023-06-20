import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  const handleLocationClick = () => {
    // Open the location in a new tab
    window.open('https://maps.app.goo.gl/YQ63Aza41rgZfaov9');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        style={{ color: 'purple', fontSize: '35px', cursor: 'pointer' }}
        onClick={handleLocationClick}
      />
      <div style={{ fontSize: '15px', marginTop: '5px' }}>Location</div>
    </div>
  );
};

export default Location;
