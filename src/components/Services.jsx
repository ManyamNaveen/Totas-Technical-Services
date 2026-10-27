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
                    <picture style={{ display: 'contents' }}>
                      <source srcSet={s.webpImage} type="image/webp" />
                      <img src={s.image} alt={({ 'pool-cleaning': 'Technician skimming leaves from a swimming pool', 'water-testing-balancing': 'Technician testing pool water with a color test kit', 'routine-pool-maintenance': 'Technician servicing a swimming pool pump', 'pool-pump-repair': 'Technician repairing a swimming pool pump', 'pool-filter-servicing': 'Technician checking a swimming pool filter pressure gauge', 'pool-plumbing-leak-repairs': 'Technician inspecting swimming pool pipes and valves', 'pool-lighting-electrical': 'Technician inspecting an electrical control panel beside an illuminated pool', 'pool-construction': 'Reinforced concrete swimming pool shell under construction', 'pool-renovation-refurbishment': 'Workers replacing tiles inside a drained swimming pool', 'pool-tile-grout-repairs': 'Worker repairing tiles on the inside wall of a swimming pool', 'pool-waterproofing': 'Workers applying a waterproof coating inside an empty pool', 'pool-leak-detection': 'Technician using an electronic device to check for a pool leak', 'pool-surface-repair-recoating': 'Worker applying a new finish to an empty pool surface', 'pool-heating-systems': 'Technician servicing a pool heat pump', 'overflow-water-feature-maintenance': 'Technician cleaning the overflow channel of an infinity pool', 'pool-deck-surrounding-works': 'Worker laying paving beside a swimming pool', 'pool-accessories-general-repairs': 'Swimming pool cleaning tools and accessories beside a pool' }[s.id] ?? s.title)} loading="lazy" width="900" height="600" />
                    </picture>
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
