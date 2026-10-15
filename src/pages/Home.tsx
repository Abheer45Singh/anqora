import { ArrowRight, Zap, Target, CircleCheck, Radio, MessageSquare, MessageCircle, Smartphone, Phone, ShieldCheck } from 'lucide-react';
import { Link, useSeo } from '../router';
import { Reveal, SectionHead, CtaBand } from '../components/ui';
import { SOLUTIONS, WHY } from '../data';

const PILLARS = [
  { t: 'Connect', d: 'Connect across the channels your customers already use.' },
  { t: 'Engage', d: 'Engage through personalized, timely, and relevant communication.' },
  { t: 'Scale', d: 'Scale with technology designed to support evolving business needs.' },
  { t: 'Optimize', d: 'Optimize customer interactions through smarter communication workflows.' },
];

export default function Home() {
  useSeo('Intelligent Cloud Communication Platform', 'Anqora is a CPaaS company bringing SMS, WhatsApp Business API, RCS and Voice together in one connected ecosystem.');
  const whyPreview = [WHY[0], WHY[2], WHY[3]];

  return (
    <>
      <section className="hero">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <div className="container hero-split page-enter">
          <div>
            <span className="eyebrow">Cloud Communications Platform</span>
            <h1>Every Conversation. <span className="text-grad">A Greater Possibility.</span></h1>
            <p className="hero-sub">Intelligent Communication. Meaningful Connections.</p>
            <p className="lead">
              At Anqora, we help businesses transform the way they communicate, engage, and grow. Our cloud communication
              solutions bring messaging, rich customer interactions, and voice together in one connected ecosystem—making
              every customer interaction more purposeful.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary" id="hero-cta-primary">Talk to Our Experts <ArrowRight size={18} /></Link>
              <Link to="/solutions" className="btn btn-ghost on-dark" id="hero-cta-secondary">Explore Solutions</Link>
            </div>
            <div className="channel-strip" aria-label="Supported channels">
              <span><MessageSquare size={16} /> SMS</span>
              <span><MessageCircle size={16} /> WhatsApp Business API</span>
              <span><Smartphone size={16} /> RCS</span>
              <span><Phone size={16} /> Voice</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-head">
                  <div className="phone-avatar">A</div>
                  <div><b style={{ fontSize: '.82rem' }}>Your Brand</b><small>Verified business</small></div>
                </div>
                <div className="bubble b1">Your OTP is <b>482 913</b>. Valid for 5 minutes.</div>
                <div className="bubble b2">Order #A1029 has shipped 🚚 Arriving tomorrow.
                  <div className="chips"><span>Track order</span><span>Reschedule</span></div>
                </div>
                <div className="bubble me b3">Track order</div>
                <div className="bubble b4">Out for delivery — 2 stops away.</div>
              </div>
            </div>
            <div className="float-chip fc-1"><span className="ic"><ShieldCheck size={16} /></span><div>OTP verified<small>via SMS · 1.2s</small></div></div>
            <div className="float-chip fc-2"><span className="ic"><Radio size={16} /></span><div>Campaign live<small>RCS + WhatsApp</small></div></div>
            <div className="float-chip fc-3"><span className="ic"><Phone size={16} /></span><div>Voice alert<small>Delivered</small></div></div>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Why it matters</span>
            <h2 style={{ marginBottom: '1rem' }}>Communication That Moves Business Forward</h2>
            <p className="lead">
              From critical alerts to personalized customer journeys, Anqora enables businesses to deliver the right message
              through the right channel at the right moment.
            </p>
            <div className="stat-panel" style={{ marginTop: '2rem' }}>
              <div className="glow glow-a" />
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="icon-box" style={{ background: 'rgba(0,210,255,.12)', color: 'var(--cyan)' }}><Target size={22} /></span>
                <div>
                  <b>Right message · Right channel · Right moment</b>
                  <p style={{ color: 'var(--slate-400)', fontSize: '.9rem' }}>One connected ecosystem for every customer touchpoint.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid" style={{ gap: '1rem' }}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <div className="pillar">
                  <span className="num">0{i + 1}</span>
                  <div><h3>{p.t}</h3><p>{p.d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions teaser */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="Solutions" title="One ecosystem. Four powerful channels." lead="Choose the channel that fits the moment — or orchestrate them together for seamless customer journeys." />
          <div className="grid g-4">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <Link to={`/solutions#${s.id}`} className="card card-top-line" style={{ display: 'block', height: '100%' }} id={`home-solution-${s.id}`}>
                  <span className="icon-box"><s.icon size={22} /></span>
                  <h3>{s.name}</h3>
                  <p style={{ fontWeight: 600, color: 'var(--blue)', fontSize: '.85rem', marginBottom: '.5rem' }}>{s.tagline}</p>
                  <p>{s.desc.split('—')[0]}</p>
                  <span className="link-arrow" style={{ marginTop: '1.25rem' }}>Learn more <ArrowRight size={16} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why preview */}
      <section className="section dark">
        <div className="glow glow-a" style={{ opacity: .5 }} />
        <div className="container" style={{ position: 'relative' }}>
          <SectionHead eyebrow="Why Anqora" title={<>Technology with a <span className="text-grad">Purpose</span></>} lead="We combine technological flexibility, business understanding, and a customer-first mindset." />
          <div className="grid g-3">
            {whyPreview.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="icon-box"><w.icon size={22} /></span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/why-anqora" className="link-arrow">See everything that sets us apart <ArrowRight size={16} /></Link>
              <span style={{ color: 'var(--slate-400)', fontSize: '.9rem', display: 'inline-flex', gap: '.5rem', alignItems: 'center' }}>
                <CircleCheck size={16} color="var(--cyan)" /> Consent-first · <Zap size={16} color="var(--cyan)" /> Integration-ready
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
