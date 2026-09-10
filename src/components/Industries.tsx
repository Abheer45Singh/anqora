import { Wallet, Stethoscope, GraduationCap, ShoppingBag, Plane, Truck } from 'lucide-react';

export function Industries() {
  const industries = [
    { name: "Fintech & Lending", icon: <Wallet size={20} />, usecase: "OTP, Fraud Alerts, Loan Updates" },
    { name: "Healthcare", icon: <Stethoscope size={20} />, usecase: "Appointment Reminders, Lab Reports" },
    { name: "EdTech", icon: <GraduationCap size={20} />, usecase: "Class Schedules, Payment Links" },
    { name: "Retail & E-commerce", icon: <ShoppingBag size={20} />, usecase: "Abandoned Cart, Order Tracking" },
    { name: "Travel & Hospitality", icon: <Plane size={20} />, usecase: "Boarding Passes, Booking Confirmations" },
    { name: "Logistics", icon: <Truck size={20} />, usecase: "Delivery Updates, Driver Coordination" }
  ];

  return (
    <section id="industries" style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.35rem 0.75rem', background: 'rgba(57, 181, 74, 0.1)', border: '1px solid rgba(57, 181, 74, 0.2)', borderRadius: '9999px', marginBottom: '1.5rem', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary-green)' }}>
            SOLUTIONS BY INDUSTRY
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Built for your <span style={{ color: 'var(--color-text)' }}>use case.</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Whatever you're building, Anqora provides the specialized tools to connect with your customers reliably and securely.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          {industries.map((ind, i) => (
            <div key={i} className="glass-panel" style={{ padding: '2rem', borderRadius: '12px', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {ind.icon}
                </div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{ind.name}</h4>
              </div>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.5px', color: 'var(--color-text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Popular Use Cases</span>
                <p style={{ color: 'var(--color-primary-green)', fontSize: '0.9375rem', fontWeight: 500 }}>{ind.usecase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
