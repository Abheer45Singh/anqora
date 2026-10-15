import { useEffect, useState, type KeyboardEvent } from 'react';
import { ArrowRight, CircleCheck, Phone } from 'lucide-react';
import { Link, useSeo } from '../router';
import { PageHero, Reveal, SectionHead, CtaBand } from '../components/ui';
import { SOLUTIONS, USE_CASES } from '../data';

function Mock({ id }: { id: string }) {
  if (id === 'sms') return (
    <>
      <span className="mock-label">SMS · AX-ANQORA</span>
      <div className="bubble">Your verification code is <b>739 204</b>. Do not share it with anyone.</div>
      <div className="bubble">Payment of ₹2,499 received for order #88213. Thank you!</div>
      <div className="bubble">Reminder: Your appointment is tomorrow at 10:30 AM.</div>
    </>
  );
  if (id === 'whatsapp') return (
    <>
      <span className="mock-label">WhatsApp Business · Verified</span>
      <div className="bubble">Hi Priya 👋 Your booking is confirmed. How can we help today?
        <div className="chips"><span>Manage booking</span><span>Talk to support</span></div>
      </div>
      <div className="bubble me">Talk to support</div>
      <div className="bubble">Connecting you with an agent now…</div>
    </>
  );
  if (id === 'rcs') return (
    <>
      <span className="mock-label">RCS · Branded sender</span>
      <div className="rich-card">
        <div className="img"><b style={{ fontSize: '1.2rem' }}>NEW ARRIVALS</b></div>
        <div className="body"><b>Summer Collection</b>Up to 30% off on selected styles this week.</div>
        <div className="acts"><span>Shop now</span><span>View more</span></div>
      </div>
      <div className="bubble" style={{ maxWidth: 260 }}><div className="chips" style={{ marginTop: 0 }}><span>Remind me</span><span>Not now</span></div></div>
    </>
  );
  return (
    <>
      <span className="mock-label">Voice · Outbound workflow</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
        <span className="icon-box" style={{ background: 'var(--grad)', color: '#fff' }}><Phone size={20} /></span>
        <div><b>Verification call</b><div style={{ color: 'var(--slate-400)', fontSize: '.85rem' }}>“Your code is 4 – 8 – 2 – 9”</div></div>
      </div>
      <div className="voice-wave" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => <span key={i} style={{ animationDelay: `${(i % 7) * 0.12}s` }} />)}
      </div>
      <div className="bubble">Press 1 to confirm · Press 2 to speak with an agent</div>
    </>
  );
}

export default function Solutions() {
  useSeo('Solutions', 'SMS, WhatsApp Business API, RCS Messaging and Voice Solutions from Anqora — one connected communication ecosystem.');
  const fromHash = () => SOLUTIONS.findIndex((s) => s.id === window.location.hash.slice(1));
  const [active, setActive] = useState(() => Math.max(0, fromHash()));

  useEffect(() => {
    const i = fromHash();
    if (i >= 0) {
      setActive(i);
      document.getElementById('channels')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setActive((a) => (a + 1) % SOLUTIONS.length);
    if (e.key === 'ArrowLeft') setActive((a) => (a - 1 + SOLUTIONS.length) % SOLUTIONS.length);
  };

  const s = SOLUTIONS[active];

  return (
    <>
      <PageHero eyebrow="Solutions" title={<>The right channel for <span className="text-grad">every moment.</span></>}
        lead="Messaging, rich interactions, and voice — designed to work independently or together as one connected customer communication ecosystem." />

      <section className="section" id="channels" style={{ scrollMarginTop: 72 }}>
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Communication channels" onKeyDown={onKey}>
            {SOLUTIONS.map((x, i) => (
              <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={i === active} aria-controls={`panel-${x.id}`}
                tabIndex={i === active ? 0 : -1} className="tab" onClick={() => { setActive(i); history.replaceState(null, '', `#${x.id}`); }}>
                <x.icon size={18} /> {x.short}
              </button>
            ))}
          </div>

          <div key={s.id} className="solution-panel" role="tabpanel" id={`panel-${s.id}`} aria-labelledby={`tab-${s.id}`}>
            <div>
              <span className="icon-box"><s.icon size={22} /></span>
              <h2 style={{ marginTop: '1.25rem' }}>{s.name}</h2>
              <p className="tagline">{s.tagline}</p>
              <p className="lead">{s.desc}</p>
              <div className="feature-tiles">
                {s.features.map((f) => <div key={f} className="feature-tile"><CircleCheck size={18} /> {f}</div>)}
              </div>
              <div className="hero-actions" style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="btn btn-primary">Discuss {s.short} <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div className="mock"><div className="glow glow-a" /><Mock id={s.id} /></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="Use Cases" title="One Platform Approach. Multiple Business Possibilities." />
          <div className="grid g-3">
            {USE_CASES.slice(0, 3).map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="icon-box"><u.icon size={22} /></span>
                  <h3>{u.title}</h3><p>{u.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><p style={{ textAlign: 'center', marginTop: '2.5rem' }}><Link to="/use-cases" className="link-arrow">View all use cases <ArrowRight size={16} /></Link></p></Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
