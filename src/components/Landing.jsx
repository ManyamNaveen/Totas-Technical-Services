import {
  House, Building2, Hotel, Settings, Waves, Brush, FlaskConical, Cylinder, SprayCan,
  Wrench, ShieldCheck, Hammer, Blinds, Clock, ThumbsUp, MapPin, PhoneCall,
} from 'lucide-react';
import { business } from '../config';

const poolTypes = [
  { icon: House, label: ['Residential', 'Pools'] },
  { icon: Building2, label: ['Commercial', 'Pools'] },
  { icon: Hotel, label: ['Villas & Apartments', 'Pools'] },
  { icon: Settings, label: ['All Types of', 'Swimming Pool Works'] },
];

const poolServices = [
  { img: 'pool-cleaning', icon: Waves, title: 'Pool Cleaning', text: 'Surface skimming, vacuuming and debris removal.' },
  { img: 'vacuuming', icon: Brush, title: 'Vacuuming', text: 'Thorough cleaning for crystal clear water.' },
  { img: 'water-testing', icon: FlaskConical, title: 'Water Testing & Balancing', text: 'Maintain correct pH, chlorine and chemical levels.' },
  { img: 'filtration', icon: Cylinder, title: 'Filtration System Maintenance', text: 'Clean filters, check pumps and ensure proper circulation.' },
  { img: 'tile-cleaning', icon: SprayCan, title: 'Tile & Surface Cleaning', text: 'Remove stains, algae and keep your pool looking new.' },
  { img: 'equipment', icon: Wrench, title: 'Equipment Inspection', text: 'Check and repair all pool equipment and systems.' },
  { img: 'water-quality', icon: ShieldCheck, title: 'Water Quality Improvement', text: 'Clear, healthy and safe swimming water.' },
  { img: 'repairs', icon: Hammer, title: 'Pool Repairs', text: 'Fix leaks, cracks and other pool issues.' },
  { img: 'pool-cover', icon: Blinds, title: 'Pool Cover Installation', text: 'Protect your pool and reduce maintenance cost.' },
  { img: 'all-works', icon: Settings, title: 'All Types of Swimming Pool Works', text: 'Renovation, upgrading, new installation and more.' },
];

const promises = [
  { icon: ShieldCheck, label: ['Professional & Experienced', 'Team'] },
  { icon: Clock, label: ['24/7', 'Support'] },
  { icon: ThumbsUp, label: ['Reliable & Affordable', 'Services'] },
  { icon: MapPin, label: ['Serving All Areas in Dubai, UAE'] },
];

export default function Landing() {
  return (
    <section className="landing" id="top">
      <div className="landing__hero">
        <div className="landing__photo" aria-hidden="true" />
        <div className="landing__hero-inner">
          <a href="#top" className="landing__brand" aria-label={`${business.name} home`}>
            <img src="/images/home/logo.png" alt="" width="166" height="94" />
            <span>
              <strong>{business.name.toUpperCase()}</strong>
              <small>DUBAI UAE</small>
            </span>
          </a>
          <h1>Swimming Pool Maintenance <br />&amp; Cleaning Services</h1>
          <p className="landing__lead">
            Keep your pool clean, safe and in perfect condition <br className="hide-mobile" />
            with our professional maintenance services.
          </p>
          <ul className="landing__types">
            {poolTypes.map(({ icon: Icon, label }) => (
              <li key={label.join(' ')}>
                <span className="landing__badge"><Icon size={26} /></span>
                <span>{label[0]}<br />{label[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="landing__services">
        <h2 className="landing__heading"><span>Our Pool Maintenance Services</span></h2>
        <ul className="landing__grid">
          {poolServices.map(({ img, icon: Icon, title, text }, i) => (
            <li key={img} className={`landing__card ${i >= 5 ? 'landing__card--short' : ''}`}>
              <img src={`/images/home/${img}.jpg`} alt={title} loading="lazy" />
              <div className="landing__card-body">
                <span className="landing__badge"><Icon size={22} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="landing__bar">
        <ul className="landing__promises">
          {promises.map(({ icon: Icon, label }) => (
            <li key={label.join(' ')}>
              <span className="landing__ring"><Icon size={24} /></span>
              <span>{label[0]}{label[1] && <><br />{label[1]}</>}</span>
            </li>
          ))}
        </ul>
        <div className="landing__contact">
          <span className="landing__contact-icon"><PhoneCall size={24} /></span>
          <span>
            <strong>Contact Us Today</strong>
            <span className="landing__phones">
              <a href={`tel:+${business.phoneRaw}`}>{business.phone}</a>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
