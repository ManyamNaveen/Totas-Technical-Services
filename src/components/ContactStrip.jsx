import { ShieldCheck, CalendarDays, MapPin, PhoneCall } from 'lucide-react';
import { business } from '../config';

const trustItems = [
  { icon: ShieldCheck, label: 'Dubai DET licensed' },
  { icon: CalendarDays, label: 'Serving since 2021' },
  { icon: MapPin, label: 'Across Dubai, UAE' },
];

export default function ContactStrip() {
  return (
    <section className="contact-strip" aria-label="Contact TOTAS Technical Services">
      <div className="container contact-strip__inner">
        <ul className="contact-strip__proof">
          {trustItems.map(({ icon: Icon, label }) => (
            <li key={label}><Icon size={22} /> <span>{label}</span></li>
          ))}
        </ul>
        <a className="contact-strip__action" href={`tel:+${business.phoneRaw}`}>
          <PhoneCall size={24} />
          <span>Contact us today</span>
          <strong>{business.phone}</strong>
        </a>
      </div>
    </section>
  );
}