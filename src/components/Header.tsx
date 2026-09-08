import { MessageSquare, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="header glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--color-border)', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/favicon.png" alt="Anqora Logo" style={{ width: '52px', height: '52px', mixBlendMode: 'screen' }} />
          <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px' }}>Anqora</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '32px' }} className="nav-desktop">
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#platform" className="nav-link">Platform</a>
          <a href="#industries" className="nav-link">Industries</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#contact" className="btn btn-secondary">
            Talk to us <MessageSquare size={16} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </div>
    </header>
  );
}
