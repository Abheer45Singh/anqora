import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Cpu, Share2, Store, Puzzle, Building2, Handshake } from 'lucide-react';
import { useSeo } from '../router';
import { PageHero, Reveal, SectionHead } from '../components/ui';
import { ContactForm } from '../components/ContactForm';

const PARTNERS = [
  { icon: Cpu, t: 'Technology Providers', d: 'Combine your platform with our communication capabilities.' },
  { icon: Share2, t: 'Channel Partners', d: 'Extend cloud communication solutions to your network.' },
  { icon: Store, t: 'Resellers', d: 'Offer reliable messaging and voice under a trusted partnership.' },
  { icon: Puzzle, t: 'System Integrators', d: 'Deliver integrated communication within client solutions.' },
  { icon: Building2, t: 'Businesses', d: 'Long-term CPaaS collaboration built around your growth.' },
];

function Modal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector<HTMLElement>('input')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>('button, input, select, textarea, a[href]');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus(); };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} className="modal form-card" role="dialog" aria-modal="true" aria-labelledby="partner-modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close partnership form" id="partner-modal-close"><X size={18} /></button>
        <span className="eyebrow">Partnership Inquiry</span>
        <h2 id="partner-modal-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Explore a Partnership</h2>
        <ContactForm source="partnership" idPrefix="partner" />
      </div>
    </div>
  );
}

export default function Partnerships() {
  useSeo('Partnerships', 'Partner with Anqora — technology providers, channel partners, resellers, system integrators and businesses.');
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHero eyebrow="Partnerships" title={<>Let’s Build Better Communication <span className="text-grad">Together.</span></>}
        lead="We welcome technology providers, channel partners, resellers, system integrators, and businesses looking for long-term CPaaS collaboration.">
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => setOpen(true)} id="partner-cta-hero" aria-haspopup="dialog">
            Explore a Partnership <ArrowRight size={18} />
          </button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Who we partner with" title="Growing together, built on trust." />
          <div className="grid g-3">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 90}>
                <div className="card card-top-line" style={{ height: '100%' }}>
                  <span className="icon-box"><p.icon size={22} /></span>
                  <h3>{p.t}</h3><p>{p.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <button className="card" onClick={() => setOpen(true)} aria-haspopup="dialog" id="partner-cta-card"
                style={{ height: '100%', width: '100%', textAlign: 'left', cursor: 'pointer', background: 'var(--navy-900)', color: '#fff', borderColor: 'var(--navy-700)' }}>
                <span className="icon-box" style={{ background: 'var(--grad)', color: '#fff' }}><Handshake size={22} /></span>
                <h3>Have a partnership idea?</h3>
                <p style={{ color: 'var(--slate-400)' }}>Tell us how we can create value together.</p>
                <span className="link-arrow" style={{ marginTop: '1.25rem', color: 'var(--cyan)' }}>Explore a Partnership <ArrowRight size={16} /></span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>
      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}
