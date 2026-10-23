import { Droplets, Sun, Wrench, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Droplets,
    tone: 'aqua',
    title: 'Pool Specialists First',
    text: 'Water testing, chemical balancing and equipment care that keep your pool clear, healthy and safe all year.',
  },
  {
    icon: Sun,
    tone: 'amber',
    title: 'Built for Dubai’s Climate',
    text: 'We know how heat, sand and dust affect pools, air-conditioning and property systems, and plan our work around it.',
  },
  {
    icon: Wrench,
    tone: 'green',
    title: 'One Team for Every Trade',
    text: 'Pools, AC, plumbing, tiling, painting and carpentry handled by one contractor, so you never chase several.',
  },
  {
    icon: ShieldCheck,
    tone: 'navy',
    title: 'Licensed & Transparent',
    text: 'Registered with Dubai Department of Economy & Tourism, with the price and timeline agreed before work begins.',
  },
];

export default function WhyUs() {
  return (
    <section className="section why" id="why-us">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Why choose us</span>
          <h2>Why Dubai Homeowners Choose TOTAS</h2>
        </div>
        <div className="reasons">
          {reasons.map(({ icon: Icon, tone, title, text }) => (
            <div key={title} className="reason reveal">
              <span className={`reason__icon reason__icon--${tone}`}><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
