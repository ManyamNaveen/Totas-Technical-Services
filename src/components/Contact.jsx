import { Phone } from 'lucide-react';
import { business, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner reveal">
        <h2>Ready for a Crystal-Clear Pool? Let&apos;s Begin</h2>
        <p>
          Join Dubai villa owners who trust {business.shortName} for pool care, repairs and installation.
          Get a free, no-obligation quote today.
        </p>
        <div className="cta__actions">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
          <a href="#quote" className="btn btn--light btn--lg">Get a Free Quote</a>
          <a href={`tel:+${business.phoneRaw}`} className="btn btn--ghost btn--lg">
            <Phone size={18} /> {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
