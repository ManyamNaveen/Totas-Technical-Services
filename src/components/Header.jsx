import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { business } from '../config';

const links = [
  { href: '#services', label: 'Our services' },
  { href: '#our-work', label: 'Our work' },
  { href: '#why-us', label: 'Why us' },
  { href: '#process', label: 'How it works' },
  { href: '#areas', label: 'Areas' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Hidden over the landing hero, which carries its own branding; slides in once scrolled past it.
    const onScroll = () => setScrolled(window.scrollY > 360);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // The mobile menu sits outside <header>: the header's backdrop-filter would otherwise
  // become the menu's containing block and collapse its fixed full-screen panel.
  return (
    <>
      <header className={`header ${scrolled || open ? 'header--solid' : 'header--hidden'}`}>
        <div className="container header__inner">
          <a href="#top" className="brand" aria-label={`${business.name} home`}>
            <span className="brand__text">
              <strong>{business.shortName}</strong>
              <small>Technical Services</small>
            </span>
          </a>

          <nav className="nav" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="header__actions">
            <a href={`tel:+${business.phoneRaw}`} className="header__phone">
              <Phone size={16} /> {business.phone}
            </a>
            <a href="#contact" className="btn btn--primary btn--sm">Contact us</a>
            <button
              className="menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>Contact us</a>
        <a href={`tel:+${business.phoneRaw}`} className="mobile-nav__phone"><Phone size={18} /> {business.phone}</a>
      </div>
    </>
  );
}
