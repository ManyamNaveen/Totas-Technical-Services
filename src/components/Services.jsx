import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services, categories, whatsappLink } from '../config';

export default function Services() {
  const [active, setActive] = useState('all');
  const visible = active === 'all' ? services : services.filter((s) => s.category === active);

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Our services</span>
          <h2>Everything your property needs, under one licence</h2>
          <p>
            One reliable team for pools, AC, plumbing and finishing works, so you don't have to coordinate
            several contractors.
          </p>
        </div>

        <div className="tabs reveal" role="tablist" aria-label="Filter services">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`tab ${active === c.id ? 'tab--active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="services__grid">
          {visible.map((s) => {
            return (
              <article key={s.id} className="service-card">
                <div className="service-card__media">
                  <img src={s.image} alt="" loading="lazy" width="900" height="600" />
                </div>
                <div className="service-card__body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a
                    href={whatsappLink(`Hi TOTAS, I'd like to know more about ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-card__link"
                  >
                    Ask about this <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
