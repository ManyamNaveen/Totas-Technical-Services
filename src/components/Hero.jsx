import { ShieldCheck, Home, Building2, MapPin, ArrowRight } from 'lucide-react';
import { business, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

const highlights = [
  { icon: Home, label: 'Homes & villas' },
  { icon: Building2, label: 'Commercial properties' },
  { icon: ShieldCheck, label: 'Serving since 2021' },
  { icon: MapPin, label: 'Across Dubai' },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">
            <ShieldCheck size={16} />
            Dubai DET licensed | {business.shortName} Technical Services
          </span>
          <h1>
            Swimming Pool Maintenance <span className="text-accent">&amp; Cleaning Services</span>
          </h1>
          <p className="hero__lead">
            Keep your pool clean, safe and ready to enjoy. Our Dubai team also handles pool installation,
            air-conditioning, plumbing and finishing works.
          </p>
          <div className="hero__ctas">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href="#services" className="btn btn--primary btn--lg">
              Explore Our Services <ArrowRight size={18} />
            </a>
          </div>
          <ul className="hero__trust" aria-label="Service highlights">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label}><Icon size={19} /> {label}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
