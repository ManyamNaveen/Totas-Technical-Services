import { ShieldCheck, Wrench, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { business, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

const highlights = [
  'Pool cleaning & maintenance',
  'Swimming pool installation',
  'AC, ventilation & plumbing',
  'Tiling, painting & carpentry',
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow eyebrow--light">
            <ShieldCheck size={16} />
            <span className="hide-mobile">Licensed by Dubai Economy &amp; Tourism</span>
            <span className="show-mobile">Licensed by Dubai DET</span>
          </span>
          <h1>
            Pools, maintenance &amp; finishing works, <span className="text-accent">handled by one trusted team.</span>
          </h1>
          <p className="hero__lead">
            {business.name} keeps Dubai villas, homes and buildings running, from crystal-clear pools to
            cool air, sound plumbing and beautiful finishes.
          </p>
          <div className="hero__ctas">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href="#services" className="btn btn--light btn--lg">
              Explore Our Services <ArrowRight size={18} />
            </a>
          </div>
          <ul className="hero__trust">
            <li><ShieldCheck size={18} /> DET licence no. {business.licenseNo}</li>
            <li><Wrench size={18} /> 10 trades, one contractor</li>
            <li><MapPin size={18} /> Serving all of Dubai</li>
          </ul>
        </div>

        <aside className="hero__card" aria-label="Popular services">
          <p className="hero__card-title">What we do best</p>
          <ul>
            {highlights.map((h) => (
              <li key={h}><CheckCircle2 size={18} /> {h}</li>
            ))}
          </ul>
          <a href="#services" className="hero__card-link">See all 10 services <ArrowRight size={16} /></a>
        </aside>
      </div>
    </section>
  );
}