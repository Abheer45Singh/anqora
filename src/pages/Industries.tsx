import { useSeo } from '../router';
import { PageHero, Reveal, CtaBand } from '../components/ui';
import { INDUSTRIES } from '../data';

export default function Industries() {
  useSeo('Industries We Serve', 'Communication solutions for Banking & Fintech, E-commerce, Healthcare, SaaS, Travel & Hospitality and Customer Service.');
  return (
    <>
      <PageHero eyebrow="Industries" title={<>Communication Built Around <span className="text-grad">Your Industry</span></>}
        lead="Every industry has its own customer moments. We help you meet each of them with the right message on the right channel." />
      <section className="section">
        <div className="container grid g-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 90}>
              <article className="card card-top-line industry-card" style={{ height: '100%' }} tabIndex={0}>
                <ind.icon className="bg-icon" size={130} strokeWidth={1.2} aria-hidden="true" />
                <span className="icon-box"><ind.icon size={22} /></span>
                <h3>{ind.name}</h3>
                <div className="tags">{ind.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="Don’t see your industry?" text="Our solutions adapt to unique workflows. Tell us about yours and we’ll shape the right approach." />
    </>
  );
}
