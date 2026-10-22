import { Phone, MapPin, ShieldCheck } from 'lucide-react';
import { business, services } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#top" className="brand brand--light">
            <span className="brand__text">
              <strong>{business.shortName}</strong>
              <small>Technical Services</small>
            </span>
          </a>
          <p>Swimming pools, AC, plumbing and finishing works for homes and businesses across Dubai.</p>
          <p className="footer__license">
            <ShieldCheck size={18} /> Dubai DET licence no. {business.licenseNo}
          </p>
        </div>

        <div className="footer__services">
          <h4>Services</h4>
          <ul>
            {services.map((s) => <li key={s.id}><a href="#services">{s.title}</a></li>)}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><Phone size={16} /><a href={`tel:+${business.phoneRaw}`}>{business.phone}</a></li>
            <li><MapPin size={16} /><span>{business.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>{'\u00A9'} {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        <a href="#top">Back to top {'\u2191'}</a>
      </div>
    </footer>
  );
}
