import { CalendarDays, Sun, Heart, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: CalendarDays,
    title: 'Serving Dubai since 2021',
    text: 'A local technical services team for homes, villas and buildings across Dubai.',
  },
  {
    icon: Sun,
    title: 'Dubai climate specialists',
    text: 'We understand how heat and dust affect pools, air-conditioning and property systems.',
  },
  {
    icon: Heart,
    title: 'Customer-focused service',
    text: 'We protect your home, clean up after ourselves and finish what we start.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully licensed',
    text: 'Registered with Dubai Department of Economy & Tourism for every service we offer.',
  },
];

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Why choose us</span>
          <h2>Why Choose TOTAS?</h2>
          <span className="why-us__underline" aria-hidden="true" />
        </div>
        <div className="reasons">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="reason">
              <span className="reason__icon"><Icon size={26} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}