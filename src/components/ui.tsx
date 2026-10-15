import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../router';

export type LogoVariant = 'light' | 'dark' | 'mono';

/**
 * Gradient ribbon "A" logomark.
 * Dynamic continuous ribbon with dimensional loop (electric blue → cyan → neon green).
 * In monochrome mode, renders solid deep obsidian/black.
 */
export function LogoMark({ variant = 'light', className = 'logo-mark' }: { variant?: LogoVariant; className?: string }) {
  const id = useId().replace(/:/g, '');
  const isMono = variant === 'mono';
  const stroke = isMono ? 'currentColor' : `url(#${id}-g)`;
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-electric-blue, #0076FF)" />
          <stop offset="0.45" stopColor="var(--color-cyan-glow, #00D2FF)" />
          <stop offset="1" stopColor="var(--color-neon-green, #22E55C)" />
        </linearGradient>
        <linearGradient id={`${id}-s`} x1="12" y1="24" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#000" stopOpacity="0.32" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Dynamic ribbon apex and legs */}
      <path
        d="M7 41 21.6 10.2Q24 5.4 26.4 10.2L41 41"
        stroke={stroke}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dimensional loop forming continuous ribbon crossbar */}
      <path
        d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5 35 35 26.5 37.5 24.5 32.5 23 28.5 28.5 26 35 27.5"
        stroke={stroke}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {!isMono && (
        <path
          d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5"
          stroke={`url(#${id}-s)`}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

/**
 * Anqora brand wordmark in bold, rounded geometric typography
 * featuring the signature subtle curved notch in the 'q'.
 */
export function Wordmark({ className = 'logo-word' }: { className?: string }) {
  return (
    <span className={className} aria-label="Anqora">
      An<span className="logo-q">q<span className="logo-q-notch" aria-hidden="true" /></span>ora
    </span>
  );
}

/**
 * Full brand lockup.
 * `light` = Primary for light backgrounds (gradient ribbon + #0A1128 wordmark)
 * `dark`  = Reverse for dark navy backgrounds (gradient ribbon + #FFFFFF wordmark)
 * `mono`  = Monochrome solid deep obsidian/black (#050814)
 */
export function Logo({
  variant = 'light',
  sub = true,
  tagline = false,
  size = 'md',
}: {
  variant?: LogoVariant;
  sub?: boolean;
  tagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  return (
    <span className={`logo logo--${variant} logo--${size}`}>
      <LogoMark variant={variant} />
      <span className="logo-text">
        <Wordmark />
        {sub && <span className="logo-sub">SOLUTIONS PVT. LTD.</span>}
        {tagline && <span className="logo-tagline">CONNECT • ENGAGE • GROW</span>}
      </span>
    </span>
  );
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <section className="hero page-hero">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="container page-enter">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, center }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

export function CtaBand({
  title = "Let's Start a Conversation.",
  text = 'Tell us what your business needs, and let’s explore the right communication solution together.',
}: { title?: string; text?: string }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div className="glow glow-a" />
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Talk to Our Experts <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
