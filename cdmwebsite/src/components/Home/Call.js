import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const PhoneNumberDisplay = () => {
  const [showPopup, setShowPopup] = useState(false);
  const phoneNumber = '+91 7259561303';

  const handlePhoneClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      const telLink = `tel:${phoneNumber}`;
      window.location.href = telLink;
    } else {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon icon={faPhone} style={{ color: 'purple', fontSize: '40px', cursor: 'pointer' }} onClick={handlePhoneClick} />
      <div style={{ fontSize: '16px', marginTop: '5px' }}>Call</div>

      {showPopup && <PhonePopup phoneNumber={phoneNumber} onClose={handleClosePopup} />}
    </div>
  );
};

const PhonePopup = ({ phoneNumber, onClose }) => {
  return (
    <div className="phone-popup">
      <div className="phone-popup-content">
        <div className="phone-popup-header">
          <h3>Phone Number</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="phone-popup-body">
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};
