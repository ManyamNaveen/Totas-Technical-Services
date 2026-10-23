import { whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

// Side tab pinned to the right edge on every screen.
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-tab"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="wa-tab__icon"><WhatsAppIcon size={20} /></span>
      <span>Chat with us</span>
    </a>
  );
}
