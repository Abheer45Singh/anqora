import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section style={{ padding: '8rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '40%', height: '40%', background: 'var(--color-primary-blue)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '0%', width: '40%', height: '40%', background: 'var(--color-primary-green)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%', zIndex: -1 }}></div>

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
        
        {/* Left Column: Text */}
        <div style={{ flex: '1 1 500px', zIndex: 1 }}>
          <div className="animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border)', borderRadius: '9999px', marginBottom: '2rem', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-muted)', letterSpacing: '0.5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary-green)' }}></span>
            API v2.0 IS LIVE
          </div>
          
          <h1 className="animate-fade-in delay-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '1.5rem' }}>
            The communication layer for <span className="text-gradient">modern scale.</span>
          </h1>
          
          <p className="animate-fade-in delay-200" style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '540px', lineHeight: 1.6 }}>
            Orchestrate millions of conversations across WhatsApp, SMS, and RCS with our developer-first API and high-throughput infrastructure.
          </p>
          
          <div className="animate-fade-in delay-300" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}>
              Start building <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#solutions" className="btn btn-secondary" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem', border: 'none', background: 'rgba(255, 255, 255, 0.05)' }}>
              Read the docs
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic UI Animation */}
        <div style={{ flex: '1 1 500px', position: 'relative', zIndex: 1, minHeight: '400px' }}>
          <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(0,174,239,0.1) 0%, rgba(57,181,74,0.05) 100%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '2rem' }}>
            
            {/* WhatsApp Bubble */}
            <div className="glass-panel animate-float msg-delay-1 animate-message" style={{ alignSelf: 'flex-start', padding: '1.25rem', borderRadius: '16px 16px 16px 4px', maxWidth: '85%', background: '#FFFFFF', border: '1px solid rgba(57, 181, 74, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--color-text)', fontWeight: 600 }}>WhatsApp Business</span>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>Just now</span>
              </div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: 'var(--color-text)' }}>
                Booking confirmed! ✈️ Your flight to NYC departs at 10:00 AM tomorrow. Safe travels!
              </p>
            </div>

            {/* SMS Bubble */}
            <div className="glass-panel animate-float-delayed msg-delay-2 animate-message" style={{ alignSelf: 'flex-end', padding: '1.25rem', borderRadius: '16px 16px 4px 16px', maxWidth: '80%', background: '#FFFFFF', border: '1px solid rgba(0, 174, 239, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexDirection: 'row-reverse' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--color-text)', fontWeight: 600 }}>Secure SMS</span>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginRight: 'auto' }}>2m ago</span>
              </div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.5, color: 'var(--color-text)' }}>
                Your Anqora secure login OTP is <strong>482910</strong>. Do not share this with anyone.
              </p>
            </div>

            {/* Notification Bubble */}
            <div className="glass-panel animate-float msg-delay-3 animate-message" style={{ alignSelf: 'flex-start', padding: '1.25rem', borderRadius: '16px', maxWidth: '85%', background: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--color-bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '2px' }}>Cart Abandoned</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Automated workflow triggered via API.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
