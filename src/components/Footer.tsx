import { Link } from '../router';
import { Logo } from './ui';

const COLS = [
  { title: 'Company', links: [['/', 'Home'], ['/about', 'About Us'], ['/why-anqora', 'Why Anqora'], ['/partnerships', 'Partnerships'], ['/contact', 'Contact']] },
  { title: 'Platform', links: [['/solutions', 'Solutions'], ['/use-cases', 'Use Cases'], ['/industries', 'Industries'], ['/api', 'API & Integrations']] },
  { title: 'Legal', links: [['/privacy', 'Privacy Policy'], ['/terms', 'Terms & Conditions'], ['/brand', 'Brand Assets']] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="dark" tagline />
            <p className="tag">Intelligent Communication. Meaningful Connections.</p>
            <p>Enabling businesses to connect with customers through cloud communication technology and smarter engagement solutions.</p>
          </div>
          {COLS.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Anqora Solutions Pvt. Ltd. All rights reserved.</span>
          <span>SMS · WhatsApp Business API · RCS · Voice</span>
        </div>
      </div>
    </footer>
  );
}
