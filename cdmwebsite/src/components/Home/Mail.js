import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const MailIcon = () => {
  const handleMailClick = () => {
    const recipient = 'param@creativedigitalmedia.co.in';
    const subject = '';
    const body = 'Hi Creative Digital Media ';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailLinkElement = document.createElement('a');
    mailLinkElement.href = mailtoLink;
    mailLinkElement.target = '_blank';
    mailLinkElement.style.display = 'none';

    document.body.appendChild(mailLinkElement);
    mailLinkElement.click();
    document.body.removeChild(mailLinkElement);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon icon={faEnvelope} style={{ color: 'purple', fontSize: '40px', cursor: 'pointer' }} onClick={handleMailClick} />
      <div style={{ fontSize: '16px', marginTop: '5px' }}>Mail</div>
    </div>
  );
};


