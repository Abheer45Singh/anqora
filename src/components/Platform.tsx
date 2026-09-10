import { Activity, Network, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function Platform() {
  return (
    <section id="platform" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.35rem 0.75rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--color-border)', borderRadius: '9999px', marginBottom: '1.5rem', fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>
              INFRASTRUCTURE
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Built for <span style={{ color: 'var(--color-primary-blue)' }}>mission-critical</span> workloads.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Our globally distributed architecture ensures 99.999% uptime. Process thousands of requests per second without breaking a sweat.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ color: 'var(--color-primary-blue)', marginTop: '4px' }}><Network size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Global Carrier Network</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.5 }}>Direct binds to Tier-1 operators across 190+ countries for lowest latency routing.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ color: 'var(--color-primary-green)', marginTop: '4px' }}><Activity size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Real-time Telemetry</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.5 }}>Granular insights into delivery rates, latencies, and conversion funnel analytics.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ color: 'var(--color-text)', marginTop: '4px' }}><ShieldCheck size={24} /></div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>Enterprise Compliance</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', lineHeight: 1.5 }}>SOC 2 Type II, GDPR, and ISO 27001 certified infrastructure.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', position: 'relative', zIndex: 2, background: 'var(--color-bg-card)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Activity size={16} color="white" />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.5px' }}>System Status</span>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary-green)', background: 'rgba(57, 181, 74, 0.1)', padding: '4px 12px', borderRadius: '9999px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-green)', animation: 'pulse 2s infinite' }}></span> ALL SYSTEMS OPERATIONAL
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--color-bg-card)', padding: '1.5rem' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>THROUGHPUT</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Fira Code, monospace' }}>8.4k</h3>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>msg/s</span>
                  </div>
                </div>
                <div style={{ background: 'var(--color-bg-card)', padding: '1.5rem' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>P99 LATENCY</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Fira Code, monospace' }}>124</h3>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>ms</span>
                  </div>
                </div>
                <div style={{ background: 'var(--color-bg-card)', padding: '1.5rem' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>DELIVERY RATE</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Fira Code, monospace', color: 'var(--color-primary-green)' }}>99.8%</h3>
                  </div>
                </div>
                <div style={{ background: 'var(--color-bg-card)', padding: '1.5rem' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.5rem' }}>UPTIME</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Fira Code, monospace', color: 'var(--color-primary-blue)' }}>99.999%</h3>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>US-East (N. Virginia)</span>
                <span style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-primary-green)' }}>
                  <ArrowUpRight size={14} /> 42ms ping
                </span>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(0,174,239,0.1) 0%, rgba(11,17,32,0) 70%)', zIndex: 1 }}></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
