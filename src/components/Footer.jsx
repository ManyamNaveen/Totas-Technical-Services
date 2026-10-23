import { Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { business, services, areas, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

const explore = [
  { href: '#services', label: 'Services' },
  { href: '#our-work', label: 'Before & After' },
  { href: '#why-us', label: 'Why choose us' },
  { href: '#process', label: 'How it works' },
  { href: '#areas', label: 'Service areas' },
  { href: '#quote', label: 'Get a free quote' },
];

const footerAreas = areas.slice(0, 10);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#top" className="footer__logo" aria-label={`${business.name} home`}>
            <img src="/images/home/logo.png" alt="" width="83" height="47" />
            <span>
              <strong>{business.shortName}</strong>
              <small>Technical Services</small>
            </span>
          </a>
          <p>
            Dubai pool specialists: maintenance, repairs and new pool installation, plus AC, plumbing and
            finishing works for villas and buildings.
          </p>
          <p className="footer__label">Talk to a pool specialist</p>
          <ul className="footer__contact">
            <li><Phone size={16} /><a href={`tel:+${business.phoneRaw}`}>{business.phone}</a></li>
            <li><WhatsAppIcon size={16} /><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></li>
            <li><MapPin size={16} /><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{business.address}</a></li>
          </ul>
          <p className="footer__license">
            <ShieldCheck size={18} /> Dubai DET licence no. {business.licenseNo}
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => <li key={s.id}><a href="#services">{s.title}</a></li>)}
          </ul>
        </div>

        <div>
          <h4>Service areas</h4>
          <ul className="footer__areas">
            {footerAreas.map((a) => <li key={a}><a href="#areas">{a}</a></li>)}
          </ul>
          <a href="#areas" className="footer__all">All areas ({areas.length}) <ArrowRight size={14} /></a>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            {explore.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>{'©'} {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        <a href="#top">Back to top {'↑'}</a>
      </div>
    </footer>
  );
}
