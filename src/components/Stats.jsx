import { BadgeCheck, CalendarCheck, MapPin, FileText } from 'lucide-react';
import { business, services, areas } from '../config';

const stats = [
  { icon: BadgeCheck, value: String(services.length), label: 'Licensed trades' },
  { icon: CalendarCheck, value: String(business.licensedSince), label: 'Licensed since' },
  { icon: MapPin, value: `${areas.length}+`, label: 'Dubai areas' },
  { icon: FileText, value: 'Free', label: 'Consultations' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Company at a glance">
      <div className="container">
        <div className="stats__grid">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="stat reveal">
              <span className="stat__icon"><Icon size={20} /></span>
              <strong>{value}</strong>
              <span className="stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
