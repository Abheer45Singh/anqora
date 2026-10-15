import { useSeo } from '../router';
import { PageHero, Reveal, CtaBand } from '../components/ui';
import { USE_CASES } from '../data';

export default function UseCases() {
  useSeo('Use Cases', 'Onboarding, OTP authentication, transactional alerts, engagement, support and re-engagement with Anqora.');
  return (
    <>
      <PageHero eyebrow="Use Cases" title={<>One Platform Approach. <span className="text-grad">Multiple Business Possibilities.</span></>}
        lead="Across the customer lifecycle, Anqora helps you deliver communication that is timely, relevant, and purposeful." />
      <section className="section">
        <div className="container grid g-3">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.title} delay={(i % 3) * 90}>
              <article className="card card-top-line" style={{ height: '100%' }}>
                <span className="step-num">STAGE 0{i + 1}</span>
                <div style={{ marginTop: '1rem' }}><span className="icon-box"><u.icon size={22} /></span></div>
                <h3>{u.title}</h3>
                <p>{u.desc}</p>
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
                  {u.channels.map((c) => <span key={c} className="pill">{c}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
