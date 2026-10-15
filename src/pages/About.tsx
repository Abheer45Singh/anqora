import { Eye, Target, Compass, Cpu, Briefcase, Heart } from 'lucide-react';
import { useSeo } from '../router';
import { PageHero, Reveal, SectionHead, CtaBand } from '../components/ui';

const APPROACH = [
  { icon: Cpu, t: 'Technological Flexibility', d: 'Adaptable cloud communication capabilities that fit the way your business already works.' },
  { icon: Briefcase, t: 'Business Understanding', d: 'Solutions shaped around real objectives — not just channels and volumes.' },
  { icon: Heart, t: 'Customer-First Mindset', d: 'Every decision guided by the experience your customers ultimately receive.' },
];

const TENETS = [
  { icon: Eye, t: 'Vision', q: 'To redefine business communication through intelligent technology, seamless connectivity, and meaningful customer experiences.' },
  { icon: Target, t: 'Mission', q: 'To empower businesses with accessible, scalable, and reliable communication solutions that simplify engagement and enable stronger customer relationships.' },
  { icon: Compass, t: 'Philosophy', q: 'Every interaction has a purpose. We believe technology should make that interaction simpler, smarter, and more impactful.' },
];

export default function About() {
  useSeo('About Us', 'Anqora Solutions Pvt. Ltd. is a cloud communications technology company building seamless, intelligent, scalable customer communication.');
  return (
    <>
      <PageHero eyebrow="About Anqora" title={<>Beyond Communication. <span className="text-grad">Towards Connection.</span></>}
        lead="Anqora Solutions Pvt. Ltd. is a cloud communications technology company focused on helping businesses create seamless, intelligent, and scalable customer communication experiences." />

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Company Profile</span>
            <h2 style={{ marginBottom: '1rem' }}>Built for businesses that value every interaction.</h2>
            <p className="lead" style={{ marginBottom: '1rem' }}>
              We bring messaging, rich customer interactions, and voice together so businesses can communicate with clarity
              and purpose — from the first touchpoint to long-term relationships.
            </p>
            <p style={{ color: 'var(--slate-600)' }}>
              Our approach combines technological flexibility, business understanding, and a customer-first mindset to deliver
              communication experiences that are reliable, responsible, and ready to scale.
            </p>
          </Reveal>
          <div className="grid" style={{ gap: '1rem' }}>
            {APPROACH.map((a, i) => (
              <Reveal key={a.t} delay={i * 90}>
                <div className="pillar">
                  <span className="icon-box" style={{ flexShrink: 0 }}><a.icon size={22} /></span>
                  <div><h3>{a.t}</h3><p>{a.d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="What drives us" title="Our Core Tenets" />
          <div className="grid g-3">
            {TENETS.map((t, i) => (
              <Reveal key={t.t} delay={i * 100}>
                <article className="card card-top-line tenet" style={{ height: '100%' }}>
                  <span className="icon-box"><t.icon size={22} /></span>
                  <h3>{t.t}</h3>
                  <blockquote>“{t.q}”</blockquote>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let’s build meaningful connections together." />
    </>
  );
}
