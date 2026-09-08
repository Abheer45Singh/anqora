export function Industries() {
  const industries = [
    "Fintech & Lending", "Healthcare", "EdTech", "E-commerce",
    "Travel & Hospitality", "Retail & D2C", "Logistics", "Enterprise"
  ];

  return (
    <section id="industries" style={{ padding: '6rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h4 style={{ color: 'var(--color-primary-blue)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>Built for Business</h4>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>Communication that fits<br/>your growth story.</h2>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
          {industries.map((ind, i) => (
            <div key={i} className="glass-panel" style={{ padding: '1rem 2rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: 500, color: 'var(--color-text-muted)', transition: 'all 0.3s ease', cursor: 'default', border: '1px solid rgba(255,255,255,0.05)' }}>
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
