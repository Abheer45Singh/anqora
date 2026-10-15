import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, usePath } from '../router';
import { Logo } from './ui';

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About Us' },
  { to: '/api', label: 'API' },
  { to: '/partnerships', label: 'Partnerships' },
];

export function Header() {
  const path = usePath();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header className={`header ${solid ? 'scrolled' : 'on-dark'}`}>
        <div className="container header-inner">
          <Link to="/" aria-label="Anqora home" id="nav-logo"><Logo variant={solid ? 'light' : 'dark'} /></Link>
          <nav aria-label="Primary">
            <ul className="nav">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} id={`nav-${n.label.toLowerCase().replace(/\s/g, '-')}`}>{n.label}</Link></li>
              ))}
            </ul>
          </nav>
          <Link to="/contact" className="btn btn-primary btn-sm header-cta" id="nav-cta">
            Talk to Experts <ArrowRight size={16} />
          </Link>
          <button
            className="menu-btn"
            id="nav-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
      <nav id="mobile-nav" className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile" aria-hidden={!open} inert={!open}>
        {NAV.map((n) => <Link key={n.to} to={n.to} className="m-link">{n.label}</Link>)}
        <Link to="/contact" className="btn btn-primary">Contact Us <ArrowRight size={18} /></Link>
      </nav>
    </>
  );
}
