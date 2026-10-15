import { Link, useSeo } from '../router';
import { PageHero, Reveal, CtaBand } from '../components/ui';
import { WHY } from '../data';

export default function WhyAnqora() {
  useSeo('Why Anqora', 'Unified, integration-ready, scalable and responsible cloud communication with a partnership mindset.');
  return (
    <>
      <PageHero eyebrow="Why Anqora" title={<>Technology with a <span className="text-grad">Purpose</span></>}
        lead="We don’t just deliver messages. We help businesses build communication that is unified, responsible, and ready for what’s next." />
      <section className="section">
        <div className="container grid g-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 90}>
              <div className="card card-top-line" style={{ height: '100%' }}>
                <span className="step-num">0{i + 1}</span>
                <div style={{ marginTop: '1rem' }}><span className="icon-box"><w.icon size={22} /></span></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <div className="card dark" style={{ height: '100%', background: 'var(--navy-900)', borderColor: 'var(--navy-700)' }}>
              <h3 style={{ marginTop: 0, color: '#fff' }}>Ready when you are.</h3>
              <p>Talk to our experts about the right mix of channels for your business.</p>
              <Link to="/contact" className="link-arrow" style={{ marginTop: '1.25rem' }}>Start a conversation →</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
