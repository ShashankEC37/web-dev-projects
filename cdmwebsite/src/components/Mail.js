import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const MailIcon = () => {
  const handleMailClick = () => {
    const recipient = 'param@creativedigitalmedia.co.in';
    const subject = '';
    const body = 'Hi Creative Digital Media ';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <FontAwesomeIcon icon={faEnvelope} style={{ color: 'purple', fontSize: '40px', cursor: 'pointer' }} onClick={handleMailClick} />
      <div style={{ fontSize: '16px', marginTop: '5px' }}>Mail</div>
    </div>
  );
};
