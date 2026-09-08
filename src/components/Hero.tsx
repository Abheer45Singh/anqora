import { ArrowRight, MessageCircle, Smartphone, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section style={{ padding: '8rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background glowing orbs */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%', background: 'var(--color-primary-blue)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'var(--color-primary-green)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }}></div>

      <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
        <div className="animate-fade-in" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--color-border)', borderRadius: '9999px', marginBottom: '2rem', fontSize: '14px', fontWeight: 500, color: 'var(--color-text-muted)' }}>
          COMMUNICATIONS • AUTOMATION • GROWTH
        </div>
        
        <h1 className="animate-fade-in delay-100" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '1.5rem' }}>
          Every conversation.<br />
          <span className="text-gradient">One powerful connection.</span>
        </h1>
        
        <p className="animate-fade-in delay-200" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
          Build meaningful customer journeys across WhatsApp, SMS and RCS with a communication platform designed for speed, scale and measurable growth.
        </p>
        
        <div className="animate-fade-in delay-300" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Start a conversation <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
          <a href="#solutions" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', border: 'none', background: 'rgba(255, 255, 255, 0.05)' }}>
            Explore solutions ↓
          </a>
        </div>

        <div className="animate-fade-in delay-300" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--color-primary-green)' }}>✓</span> Built for scale</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--color-primary-green)' }}>✓</span> API-first</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--color-primary-green)' }}>✓</span> Enterprise ready</span>
        </div>
      </div>
    </section>
  );
}
