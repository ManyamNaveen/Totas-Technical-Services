import { useEffect, useState } from 'react';
import { whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

// Hidden while the hero (which has its own WhatsApp button) is on screen.
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float ${visible ? 'wa-float--visible' : ''}`}
      aria-label="Chat with us on WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={30} />
      <span className="wa-float__label">Chat with us</span>
    </a>
  );
}
