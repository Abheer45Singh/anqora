import { Send, Map, BarChart3 } from 'lucide-react';

export function Platform() {
  return (
    <section id="platform" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <h4 style={{ color: 'var(--color-primary-green)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>Anqora Platform</h4>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
              One platform.<br />Every touchpoint.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Orchestrate customer communication across channels from a single, modern control layer.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--color-primary-blue)' }}><Send size={28} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Campaigns</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Launch targeted, scalable messaging.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--color-primary-green)' }}><Map size={28} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Journeys</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Create automated customer experiences.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ color: 'var(--color-text)' }}><BarChart3 size={28} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Insights</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Track delivery, engagement and performance.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>Overview</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-primary-green)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary-green)' }}></span> LIVE
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '16px' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>MESSAGES</p>
                  <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>2.84M+</h3>
                  <p style={{ color: 'var(--color-primary-green)', fontSize: '0.875rem', marginTop: '0.5rem' }}>↑ 18.4%</p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '16px' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>DELIVERED</p>
                  <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>97.8%</h3>
                  <p style={{ color: 'var(--color-primary-green)', fontSize: '0.875rem', marginTop: '0.5rem' }}>↑ 2.1%</p>
                </div>
              </div>

              <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>CHANNEL BREAKDOWN</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'var(--color-primary-green)' }}></div> WhatsApp</span>
                    <span style={{ fontWeight: 600 }}>1.64M</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'var(--color-primary-blue)' }}></div> SMS</span>
                    <span style={{ fontWeight: 600 }}>824K</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'var(--color-text)' }}></div> RCS</span>
                    <span style={{ fontWeight: 600 }}>376K</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '100%', height: '80%', background: 'var(--gradient-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%', zIndex: 1 }}></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
