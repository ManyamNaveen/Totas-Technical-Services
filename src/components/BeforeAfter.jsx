import { useRef, useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

// Both photos must share the same framing so the divider reveals the same scene.
const pair = {
  before: '/images/before-after/before.jpg',
  after: '/images/before-after/after.jpg',
  alt: 'Villa swimming pool',
};

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const frameRef = useRef(null);

  const moveTo = (clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };

  const onPointerMove = (e) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) moveTo(e.clientX);
  };

  return (
    <section className="section section--tint" id="our-work">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Our work</span>
          <h2>Before &amp; After</h2>
          <p>Drag the slider to see the difference regular TOTAS pool care makes.</p>
        </div>

        <div
          className="ba reveal"
          ref={frameRef}
          style={{ '--pos': `${pos}%` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
        >
          <img src={pair.after} alt="Clear swimming pool after cleaning" className="ba__img" draggable="false" loading="lazy" />
          <img src={pair.before} alt="Leaf-covered green swimming pool before cleaning" className="ba__img ba__img--before" draggable="false" loading="lazy" />
          <span className="ba__tag ba__tag--before">Before</span>
          <span className="ba__tag ba__tag--after">After</span>
          <span className="ba__divider" aria-hidden="true">
            <span className="ba__handle"><ArrowLeftRight size={18} /></span>
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={Math.round(pos)}
            onChange={(e) => setPos(Number(e.target.value))}
            className="ba__range"
            aria-label="Before and after comparison: move to reveal more of the before or after photo"
          />
        </div>

        <div className="ba__cta reveal">
          <a
            href={whatsappLink("Hi TOTAS, I'd like a quote for pool maintenance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <WhatsAppIcon /> Get the same result for your pool
          </a>
        </div>
      </div>
    </section>
  );
}
