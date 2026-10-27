import { MapPin } from 'lucide-react';
import { areas, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

export default function WhereWeWork() {
  return (
    <section className="section" id="areas">
      <div className="container where">
        <div className="where__content reveal">
          <span className="eyebrow">Where we work</span>
          <h2>Serving Dubai&apos;s Finest Communities</h2>
          <p>Reliable pool care across Dubai&apos;s leading villa communities.</p>
          <ul className="where__areas">
            {areas.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <a
            href={whatsappLink("Hi TOTAS, do you cover my area? I'm in ")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <WhatsAppIcon /> Check your area
          </a>
        </div>

        <div className="where__media reveal">
          <img src="/images/hero.jpg" alt="Modern villa beside a swimming pool" loading="lazy" width="2000" height="1333" />
          <div className="where__badge">
            <MapPin size={26} />
            <span>
              <strong>{areas.length}+ communities</strong>
              <span>across Dubai</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
