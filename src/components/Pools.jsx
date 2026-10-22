import { CheckCircle2 } from 'lucide-react';
import { whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

const points = [
  'Water testing and chemical balancing',
  'Skimming, vacuuming, brushing and tile cleaning',
  'Pump, filter and equipment servicing',
  'Green or cloudy water recovery',
  'New swimming pool installation',
  'Pool tiling and surround finishing',
];

export default function Pools() {
  return (
    <section className="section section--tint" id="pools">
      <div className="container split">
        <div className="split__media reveal">
          <img src="/images/about.jpg" alt="Rooftop infinity pool overlooking a city skyline" loading="lazy" width="1400" height="933" />
          <div className="split__badge">
            <strong>Pool care</strong>
            <span>built for Dubai's climate</span>
          </div>
        </div>
        <div className="split__content reveal">
          <span className="eyebrow">Swimming pool specialists</span>
          <h2>A clear, safe pool all year round</h2>
          <p>
            Heat, dust and heavy use make Dubai pools hard to keep in shape. We look after private villa pools,
            community pools and building pools with regular visits and quick fixes when something goes wrong.
          </p>
          <ul className="checklist">
            {points.map((p) => (
              <li key={p}><CheckCircle2 size={20} /> {p}</li>
            ))}
          </ul>
          <div className="split__ctas">
            <a
              href={whatsappLink("Hi TOTAS, I'd like to discuss pool maintenance.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <WhatsAppIcon /> Chat about pool service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
