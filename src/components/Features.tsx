import { MessageCircle, Smartphone, Code } from 'lucide-react';

export function Features() {
  return (
    <section id="solutions" style={{ padding: '6rem 0', background: 'var(--color-bg-card)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h4 style={{ color: 'var(--color-primary-blue)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>What We Do</h4>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>Communication, without the complexity.</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            From the first message to the final conversion, Anqora brings your customer communication into one connected ecosystem.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Card 1 */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(57, 181, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--color-primary-green)' }}>
              <MessageCircle size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>WhatsApp Business</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Rich, conversational experiences with templates, campaigns, journeys, APIs and business messaging.
            </p>
            <a href="#" style={{ color: 'var(--color-primary-green)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Learn more →
            </a>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', transform: 'translateY(-1rem)', cursor: 'pointer' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(0, 174, 239, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: 'var(--color-primary-blue)' }}>
              <Smartphone size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>SMS & RCS</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Reach customers reliably with scalable messaging, rich cards, delivery insights and intelligent routing.
            </p>
            <a href="#" style={{ color: 'var(--color-primary-blue)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Learn more →
            </a>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--gradient-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <Code size={32} style={{ color: 'var(--color-text)' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>APIs & Integrations</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Connect your CRM, product or workflow with developer-friendly APIs, webhooks and event-driven communication.
            </p>
            <a href="#" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
