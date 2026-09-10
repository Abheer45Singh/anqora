import { MessageCircle, Smartphone, Webhook, ArrowRight } from 'lucide-react';

export function Features() {
  return (
    <section id="solutions" style={{ padding: '8rem 0', background: 'var(--color-bg-card)', position: 'relative', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ marginBottom: '5rem', maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.35rem 0.75rem', background: 'rgba(0, 174, 239, 0.1)', border: '1px solid rgba(0, 174, 239, 0.2)', borderRadius: '9999px', marginBottom: '1.5rem', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary-blue)' }}>
            CORE CAPABILITIES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-1px', lineHeight: 1.1 }}>
            Engineered for <span style={{ color: 'var(--color-text)' }}>deliverability.</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: 1.6 }}>
            A single, unified API to reach customers anywhere on the globe. Built with automatic failover, intelligent routing, and strict compliance controls.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Feature 1 */}
          <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ flex: '1 1 350px', padding: '3rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(57, 181, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary-green)' }}>
                <MessageCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>WhatsApp Business API</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Send rich media, location data, and interactive buttons. Automate customer support and drive marketing ROI with approved templates.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--color-text-muted)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-green)' }}></div> Official Meta Partner</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary-green)' }}></div> End-to-end encryption</li>
              </ul>
              <a href="#" style={{ color: 'var(--color-primary-green)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                View WhatsApp Docs <ArrowRight size={16} />
              </a>
            </div>
            <div style={{ flex: '1 1 350px', background: 'radial-gradient(circle at center, #0F172A 0%, #070A13 100%)', padding: '3rem', borderLeft: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              {/* Phone Mockup */}
              <div style={{ width: '280px', height: 'auto', background: '#070A13', borderRadius: '32px', border: '8px solid #1E293B', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                {/* Notch */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100px', height: '24px', background: '#1E293B', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', zIndex: 10 }}></div>
                
                {/* Chat Header */}
                <div style={{ background: '#0F172A', padding: '24px 16px 12px 16px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h5 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>Anqora Health</h5>
                    <p style={{ fontSize: '11px', color: 'var(--color-primary-green)', margin: 0 }}>✓ Verified Business</p>
                  </div>
                </div>

                {/* Chat Body */}
                <div style={{ padding: '16px', background: '#0B1120', minHeight: '260px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  
                  {/* Message Bubble */}
                  <div className="animate-message msg-delay-1" style={{ background: 'var(--color-bg-card)', padding: '12px', borderRadius: '12px 12px 12px 2px', border: '1px solid var(--color-border)', alignSelf: 'flex-start', maxWidth: '90%' }}>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--color-text)', margin: 0 }}>
                      Hi Alex, this is a reminder for your dental checkup tomorrow at 10:00 AM. 🦷<br/><br/>Please confirm your appointment.
                    </p>
                    <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', textAlign: 'right', marginTop: '6px' }}>14:30</div>
                  </div>

                  {/* Interactive Buttons */}
                  <div className="animate-message msg-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px', maxWidth: '90%' }}>
                    <button style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', color: 'var(--color-primary-blue)', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '6px', alignItems: 'center' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Yes, Confirm
                    </button>
                    <button style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', color: 'var(--color-text)', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, display: 'flex', justifyContent: 'center', gap: '6px', alignItems: 'center' }}>
                      Reschedule
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {/* Feature 2 */}
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 174, 239, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary-blue)' }}>
                <Smartphone size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Global SMS & RCS</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Direct connectivity to 800+ networks globally. Send critical OTPs with ultra-low latency or rich RCS cards for maximum engagement.
              </p>
              <a href="#" style={{ color: 'var(--color-primary-blue)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Explore SMS APIs <ArrowRight size={16} />
              </a>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                <Webhook size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Event-Driven Webhooks</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Receive real-time delivery receipts (DLRs), read receipts, and inbound messages directly to your application infrastructure.
              </p>
              <a href="#" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Read the guide <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
