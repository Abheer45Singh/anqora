import { MessageSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="header" style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#0F172A', color: '#FFFFFF', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/favicon.png" alt="Anqora Logo" style={{ width: '52px', height: '52px', mixBlendMode: 'screen', filter: 'contrast(1.2) brightness(0.9)' }} />
          <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px', color: '#FFFFFF' }}>Anqora</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '32px' }} className="nav-desktop">
          <a href="#solutions" className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}>Solutions</a>
          <a href="#platform" className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}>Platform</a>
          <a href="#industries" className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}>Industries</a>
          <a href="#about" className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}>About</a>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#contact" className="btn" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            color: '#FFFFFF', 
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textDecoration: 'none',
            transition: 'all 0.2s'
          }} 
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'; }} 
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}>
            Talk to us <MessageSquare size={16} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </div>
    </header>
  );
}
