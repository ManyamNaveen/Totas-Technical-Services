import { MessageCircle, ClipboardCheck, FileSignature, BadgeCheck } from 'lucide-react';
import { areas } from '../config';

const steps = [
  { icon: MessageCircle, title: 'Tell us what you need', text: 'Send us your details and photos on WhatsApp.' },
  { icon: ClipboardCheck, title: 'Site visit', text: 'We visit, inspect the job and confirm exactly what is required.' },
  { icon: FileSignature, title: 'Clear pricing', text: 'We share the price and timeline before work begins.' },
  { icon: BadgeCheck, title: 'Work done & handover', text: 'Our team completes the job, cleans up and walks you through it.' },
];

export default function Process() {
  return (
    <section className="section section--dark" id="process">
      <div className="container">
        <div className="section__head section__head--light reveal">
          <span className="eyebrow eyebrow--light">How it works</span>
          <h2>From first message to finished job</h2>
        </div>
        <ol className="steps">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="step reveal">
              <span className="step__num">0{i + 1}</span>
              <span className="step__icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>

        <div className="areas reveal">
          <h3>Areas we serve</h3>
          <ul>
            {areas.map((a) => <li key={a}>{a}</li>)}
            <li className="areas__more">and across Dubai</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
