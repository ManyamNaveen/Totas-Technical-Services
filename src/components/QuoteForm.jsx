import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { business, services, whatsappLink } from '../config';

const poolOptions = [
  'Swimming pool cleaning',
  'Regular pool maintenance',
  'Water testing & balancing',
  'Filtration & equipment repair',
  'Pool repairs',
  'New pool installation',
  'Pool cover installation',
];
const otherOptions = services.filter((s) => s.category !== 'pools').map((s) => s.title);

const empty = { name: '', phone: '', area: '', service: poolOptions[0], message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[+\d][\d\s-]{6,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.';
  if (v.area.trim().length < 2) e.area = 'Please tell us your area.';
  return e;
}

function toWhatsAppText(v) {
  return [
    `Hi ${business.shortName}, I'd like to request a quotation.`,
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Area: ${v.area}`,
    `Service: ${v.service}`,
    v.message.trim() && `Details: ${v.message.trim()}`,
  ].filter(Boolean).join('\n');
}

export default function QuoteForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    const url = whatsappLink(toWhatsAppText(values));
    const chat = window.open(url, '_blank');
    if (chat) chat.opener = null;
    else window.location.assign(url);
  };

  const field = (name) => ({
    id: `quote-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `quote-${name}-error` : undefined,
  });

  const errorText = (name) =>
    errors[name] && <span className="field__error" id={`quote-${name}-error`}>{errors[name]}</span>;

  return (
    <section className="section quote-section" id="quote">
      <div className="container">
        <form className="form quote-card reveal" onSubmit={onSubmit} noValidate>
          <h2>Request a Quotation</h2>
          <div className="form__row">
            <div className="field">
              <label htmlFor="quote-name">Your name</label>
              <input type="text" autoComplete="name" placeholder="Enter your name" {...field('name')} />
              {errorText('name')}
            </div>
            <div className="field">
              <label htmlFor="quote-phone">Phone number</label>
              <input type="tel" autoComplete="tel" placeholder="Your contact number" {...field('phone')} />
              {errorText('phone')}
            </div>
          </div>
          <div className="form__row">
            <div className="field">
              <label htmlFor="quote-area">Your area in Dubai / UAE</label>
              <input type="text" autoComplete="address-level2" placeholder="e.g. Dubai Marina" {...field('area')} />
              {errorText('area')}
            </div>
            <div className="field">
              <label htmlFor="quote-service">Service required</label>
              <select {...field('service')}>
                <optgroup label="Swimming pools">
                  {poolOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </optgroup>
                <optgroup label="Other services">
                  {otherOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  <option value="Other">Other / multiple services</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="quote-message">Tell us about your pool</label>
            <textarea rows={3} placeholder="Pool type, size, and the service you need" {...field('message')} />
          </div>

          <button type="submit" className="btn btn--primary btn--lg btn--block">
            Send Enquiry via WhatsApp <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
