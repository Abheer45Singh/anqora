import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" style={{ padding: '6rem 0 2rem 0', background: 'var(--color-bg-card)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginBottom: '6rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Ready to make every<br />
              <span className="text-gradient">message matter?</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '400px', lineHeight: 1.6 }}>
              We help ambitious businesses turn communication into an advantage — with reliable infrastructure, thoughtful product design and support that stays close to your business.
            </p>
          </div>
          
          <div style={{ flex: '1 1 400px' }}>
            <form className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Your name</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Work email</label>
                  <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Company</label>
                <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'white', outline: 'none' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Tell us what you want to build</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1.125rem' }}>
                Talk to Anqora <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '18px' }}>
              A
            </div>
            <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-1px' }}>Anqora<span style={{ color: 'var(--color-primary-blue)' }}>.</span></span>
          </div>
          
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>
            Connecting businesses to the conversations that matter.
          </p>
          
          <p style={{ color: 'var(--color-border)', fontSize: '0.875rem', marginTop: '1rem' }}>
            © 2026 Anqora Solutions Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
