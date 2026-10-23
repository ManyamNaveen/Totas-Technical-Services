import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../config';
import { activePoolServiceGroups } from '../poolServices';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Our services</span>
          <h2>Complete swimming pool services</h2>
          <p>
            Cleaning, water care, technical repairs, construction, renovation and poolside finishing for homes and businesses.
          </p>
        </div>

        {activePoolServiceGroups.map((group) => (
          <section className={`service-group service-group--${group.services.length}`} key={group.id} aria-labelledby={`service-group-${group.id}`}>
            <h3 className="service-group__title" id={`service-group-${group.id}`}>{group.title}</h3>
            <div className="services__grid">
              {group.services.map((s) => (
                <article key={s.id} className="service-card">
                  <div className="service-card__media">
                    <img src={s.image} alt={s.title} loading="lazy" width="900" height="600" />
                  </div>
                  <div className="service-card__body">
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                    <ul className="service-card__details">
                      {s.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                    <ul className="service-card__tags">
                      {s.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <p className="service-card__price">Pricing <strong>Quoted after site assessment</strong></p>
                    <a
                      href={whatsappLink(`Hi TOTAS, I'd like a quote for ${s.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-card__link"
                    >
                      Get a quote <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
