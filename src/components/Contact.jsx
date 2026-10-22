import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { business, services, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

const empty = { name: '', phone: '', service: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^[+\d][\d\s-]{6,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.';
  if (!v.service) e.service = 'Please choose a service.';
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (10+ characters).';
  return e;
}

function toWhatsAppText(v) {
  return [
    `Hi ${business.shortName}, I'd like to discuss a service.`,
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    `Service: ${v.service}`,
    `Details: ${v.message}`,
  ].join('\n');
}

export default function Contact() {
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
    id: name,
    name,
    value: values[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const errorText = (name) =>
    errors[name] && <span className="field__error" id={`${name}-error`}>{errors[name]}</span>;

  return (
    <section className="section section--tint" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__info reveal">
            <span className="eyebrow eyebrow--light">Contact us</span>
            <h2>Chat with us</h2>
            <p>Tell us about the job and we'll get back to you quickly. Send your request on WhatsApp for the fastest reply.</p>

            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--block">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>

            <ul className="contact__list">
              <li>
                <span className="contact__icon"><Phone size={20} /></span>
                <div><small>Call us</small><a href={`tel:+${business.phoneRaw}`}>{business.phone}</a></div>
              </li>
              <li>
                <span className="contact__icon"><MapPin size={20} /></span>
                <div>
                  <small>Office</small>
                  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{business.address}</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact__form-wrap reveal">
            <form className="form" onSubmit={onSubmit} noValidate>
              <h3>Send us a message</h3>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Full name *</label>
                  <input type="text" autoComplete="name" placeholder="Your name" {...field('name')} />
                  {errorText('name')}
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone / WhatsApp *</label>
                  <input type="tel" autoComplete="tel" placeholder="+971 5X XXX XXXX" {...field('phone')} />
                  {errorText('phone')}
                </div>
              </div>
              <div className="field">
                <label htmlFor="service">Service *</label>
                <select {...field('service')}>
                  <option value="">Choose a service</option>
                  {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Other">Other / multiple services</option>
                </select>
                {errorText('service')}
              </div>
              <div className="field">
                <label htmlFor="message">Job details *</label>
                <textarea rows={5} placeholder="Location, property type and what you need done" {...field('message')} />
                {errorText('message')}
              </div>

              <div className="form__actions">
                <button type="submit" className="btn btn--whatsapp btn--lg">
                  <WhatsAppIcon /> Send message on WhatsApp
                </button>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="form__alt">
                  or chat with us now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}