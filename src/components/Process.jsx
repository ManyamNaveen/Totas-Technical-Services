import { PhoneCall, Search, FileText, Sparkles } from 'lucide-react';

const steps = [
  { icon: PhoneCall, tone: 'pink', title: 'Contact Us', text: 'Call, WhatsApp or send a quick quote request with your details and photos.' },
  { icon: Search, tone: 'aqua', title: 'Site Visit', text: 'We visit your property, inspect the pool or job and confirm exactly what is required.' },
  { icon: FileText, tone: 'navy', title: 'Clear Quote', text: 'You receive a transparent price and timeline before any work begins. No hidden costs.' },
  { icon: Sparkles, tone: 'amber', title: 'Job Done Right', text: 'Our team completes the work on schedule, cleans up and walks you through the result.' },
];

export default function Process() {
  return (
    <section className="section why" id="process">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">How it works</span>
          <h2>Simple, Transparent, Done Right</h2>
          <p>From first message to finished job: four clear steps.</p>
        </div>
        <ol className="reasons">
          {steps.map(({ icon: Icon, tone, title, text }, i) => (
            <li key={title} className="reason step reveal">
              <span className="step__num" aria-hidden="true">{i + 1}</span>
              <span className={`reason__icon reason__icon--${tone}`}><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
