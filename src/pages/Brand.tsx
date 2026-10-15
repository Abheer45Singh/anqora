import { useState } from 'react';
import { useSeo } from '../router';
import { PageHero, Reveal, SectionHead, Logo, LogoMark, Wordmark } from '../components/ui';
import { Copy, Check, Download, Layers, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

interface TokenItem {
  name: string;
  token: string;
  value: string;
  note: string;
  isGradient?: boolean;
  border?: boolean;
}

const TOKEN_GROUPS: { title: string; subtitle: string; tokens: TokenItem[] }[] = [
  {
    title: 'Brand Gradient Accents',
    subtitle: 'High-energy chromatic sequence driving the signature ribbon and primary actions',
    tokens: [
      { name: 'Electric Blue', token: '--color-electric-blue', value: '#0076FF', note: 'Primary brand blue, anchors left leg of ribbon' },
      { name: 'Cyan Glow', token: '--color-cyan-glow', value: '#00D2FF', note: 'Transition cyan, illuminates the dimensional apex' },
      { name: 'Neon Green', token: '--color-neon-green', value: '#22E55C', note: 'Vibrant green accent, terminal of ribbon loop' },
      { name: 'Mint Bright', token: '--color-mint-bright', value: '#10B981', note: 'Secondary green for positive statuses & verification' },
    ],
  },
  {
    title: 'Surface & Background Neutrals',
    subtitle: 'Architectural canvas tokens supporting both dark navy enterprise themes and crisp light layouts',
    tokens: [
      { name: 'Dark Primary Canvas', token: '--bg-dark-primary', value: '#050814', note: 'Deep navy/black hero & app canvas' },
      { name: 'Dark Secondary Navy', token: '--bg-dark-secondary', value: '#0B132B', note: 'Card container & navigation surface navy' },
      { name: 'Light Primary Canvas', token: '--bg-light-primary', value: '#FFFFFF', note: 'Pure white canvas background', border: true },
      { name: 'Light Secondary Slate', token: '--bg-light-secondary', value: '#F8FAFC', note: 'Slate neutral tint for alternating sections' },
    ],
  },
  {
    title: 'Text & Border Tokens',
    subtitle: 'Calibrated typography colors and subtle luminous boundary strokes',
    tokens: [
      { name: 'Text Primary Dark', token: '--text-primary-dark', value: '#FFFFFF', note: 'Crisp white text for dark canvas' },
      { name: 'Text Muted Dark', token: '--text-muted-dark', value: '#94A3B8', note: 'Muted slate for dark-mode secondary copy' },
      { name: 'Text Primary Light', token: '--text-primary-light', value: '#0A1128', note: 'Deep obsidian/navy text for light canvas' },
      { name: 'Text Muted Light', token: '--text-muted-light', value: '#64748B', note: 'Neutral slate for light-mode secondary copy' },
      { name: 'Border Dark', token: '--border-dark', value: 'rgba(255, 255, 255, 0.08)', note: 'Subtle boundary stroke on dark navy' },
      { name: 'Border Light', token: '--border-light', value: 'rgba(10, 17, 40, 0.08)', note: 'Soft hairline stroke on light surfaces', border: true },
    ],
  },
  {
    title: 'Signature Brand Gradients',
    subtitle: 'Continuous energy flow tokens uniting cloud communications and intelligent delivery',
    tokens: [
      {
        name: 'Signature Brand Gradient',
        token: '--gradient-brand',
        value: 'linear-gradient(135deg, #0076FF 0%, #00D2FF 45%, #22E55C 100%)',
        note: 'Icon ribbon gradient, primary CTA buttons, and highlighted typography',
        isGradient: true,
      },
      {
        name: 'Subtle Glow Ambient',
        token: '--gradient-subtle-glow',
        value: 'radial-gradient(circle at 50% 0%, rgba(0, 118, 255, 0.15) 0%, rgba(34, 229, 92, 0.08) 50%, transparent 80%)',
        note: 'Backdrop atmospheric lighting across page headers and elevated cards',
        isGradient: true,
      },
    ],
  },
];

function downloadSvg(filename: string, svgContent: string) {
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const SVG_PRIMARY_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <defs>
    <linearGradient id="g" x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0076FF"/>
      <stop offset="0.45" stop-color="#00D2FF"/>
      <stop offset="1" stop-color="#22E55C"/>
    </linearGradient>
    <linearGradient id="s" x1="12" y1="24" x2="36" y2="36" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#000000" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="div" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0076FF"/>
      <stop offset="0.45" stop-color="#00D2FF"/>
      <stop offset="1" stop-color="#22E55C"/>
    </linearGradient>
  </defs>
  <!-- Ribbon A Logomark -->
  <g transform="translate(12, 16)">
    <path d="M7 41 21.6 10.2Q24 5.4 26.4 10.2L41 41" stroke="url(#g)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5 35 35 26.5 37.5 24.5 32.5 23 28.5 28.5 26 35 27.5" stroke="url(#g)" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5" stroke="url(#s)" stroke-width="4.5" stroke-linecap="round"/>
  </g>
  <!-- Wordmark & Typography -->
  <g transform="translate(68, 18)" fill="#0A1128">
    <text font-family="'Nunito', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="32" letter-spacing="-0.5" y="28">Anqora</text>
    <!-- Dividing Underline -->
    <rect x="0" y="34" width="220" height="2" rx="1" fill="url(#div)"/>
    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" letter-spacing="2.8" fill="#0A1128" opacity="0.85" y="47">SOLUTIONS PVT. LTD.</text>
    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="8" letter-spacing="2" fill="#0A1128" opacity="0.65" y="58">CONNECT • ENGAGE • GROW</text>
  </g>
</svg>`;

const SVG_REVERSE_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <rect width="320" height="80" rx="12" fill="#050814"/>
  <defs>
    <linearGradient id="gd" x1="6" y1="8" x2="42" y2="42" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0076FF"/>
      <stop offset="0.45" stop-color="#00D2FF"/>
      <stop offset="1" stop-color="#22E55C"/>
    </linearGradient>
    <linearGradient id="sd" x1="12" y1="24" x2="36" y2="36" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#000000" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="divd" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0076FF"/>
      <stop offset="0.45" stop-color="#00D2FF"/>
      <stop offset="1" stop-color="#22E55C"/>
    </linearGradient>
  </defs>
  <g transform="translate(12, 16)">
    <path d="M7 41 21.6 10.2Q24 5.4 26.4 10.2L41 41" stroke="url(#gd)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5 35 35 26.5 37.5 24.5 32.5 23 28.5 28.5 26 35 27.5" stroke="url(#gd)" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5" stroke="url(#sd)" stroke-width="4.5" stroke-linecap="round"/>
  </g>
  <g transform="translate(68, 18)" fill="#FFFFFF">
    <text font-family="'Nunito', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="32" letter-spacing="-0.5" y="28">Anqora</text>
    <rect x="0" y="34" width="220" height="2" rx="1" fill="url(#divd)"/>
    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" letter-spacing="2.8" fill="#FFFFFF" opacity="0.9" y="47">SOLUTIONS PVT. LTD.</text>
    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="8" letter-spacing="2" fill="#FFFFFF" opacity="0.7" y="58">CONNECT • ENGAGE • GROW</text>
  </g>
</svg>`;

const SVG_MONOCHROME = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <g transform="translate(12, 16)">
    <path d="M7 41 21.6 10.2Q24 5.4 26.4 10.2L41 41" stroke="#050814" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 31.5C19 25 31.5 22.5 33.5 29.5 35 35 26.5 37.5 24.5 32.5 23 28.5 28.5 26 35 27.5" stroke="#050814" stroke-width="4.5" stroke-linecap="round"/>
  </g>
  <g transform="translate(68, 18)" fill="#050814">
    <text font-family="'Nunito', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="32" letter-spacing="-0.5" y="28">Anqora</text>
    <rect x="0" y="34" width="220" height="2" rx="1" fill="#050814"/>
    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" letter-spacing="2.8" fill="#050814" opacity="0.85" y="47">SOLUTIONS PVT. LTD.</text>
    <text font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="8" letter-spacing="2" fill="#050814" opacity="0.7" y="58">CONNECT • ENGAGE • GROW</text>
  </g>
</svg>`;

export default function Brand() {
  useSeo('Brand Assets & Design System', 'Official Anqora logo variants, logomark ribbons, and design tokens.');

  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState<'md' | 'lg' | 'xl'>('lg');
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [showTagline, setShowTagline] = useState(true);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <>
      <PageHero
        eyebrow="Brand Identity & Design System"
        title={<>Intelligent CPaaS. <span className="text-grad">Precision Brand Identity.</span></>}
        lead="The official visual assets, logo lockups, geometric logomark ribbon, and design tokens powering Anqora Solutions Pvt. Ltd."
      >
        <div className="brand-hero-meta">
          <span className="pill"><Sparkles size={14} /> Official 2026 Identity System</span>
          <span className="pill"><ShieldCheck size={14} /> WCAG AA Compliant Contrast</span>
          <span className="pill"><Layers size={14} /> Vector Scalable Tokens</span>
        </div>
      </PageHero>

      {/* 1. LOGO VARIANTS & INTERACTIVE CONTROLS */}
      <section className="section">
        <div className="container">
          <div className="brand-section-header">
            <div>
              <SectionHead
                eyebrow="Identity System"
                title="Logo Lockups & Variants"
                lead="Engineered for high-contrast presentation across deep navy enterprise consoles, crisp white portals, and monochrome print applications."
              />
            </div>
            {/* Interactive Customizer */}
            <div className="brand-controls-card">
              <div className="bc-head">
                <Sliders size={16} /> <span>Interactive Controls</span>
              </div>
              <div className="bc-group">
                <label>Size</label>
                <div className="bc-btns">
                  <button type="button" className={`bc-btn ${logoSize === 'md' ? 'active' : ''}`} onClick={() => setLogoSize('md')}>MD</button>
                  <button type="button" className={`bc-btn ${logoSize === 'lg' ? 'active' : ''}`} onClick={() => setLogoSize('lg')}>LG</button>
                  <button type="button" className={`bc-btn ${logoSize === 'xl' ? 'active' : ''}`} onClick={() => setLogoSize('xl')}>XL</button>
                </div>
              </div>
              <div className="bc-group">
                <label>Lockup Elements</label>
                <div className="bc-checks">
                  <label className="bc-check">
                    <input type="checkbox" checked={showSubtitle} onChange={(e) => setShowSubtitle(e.target.checked)} />
                    <span>Subtitle</span>
                  </label>
                  <label className="bc-check">
                    <input type="checkbox" checked={showTagline} onChange={(e) => setShowTagline(e.target.checked)} />
                    <span>Tagline</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <Reveal className="brand-tiles brand-tiles-elevated">
            {/* Primary Light */}
            <div className="brand-tile t-light">
              <div className="bt-content">
                <Logo variant="light" size={logoSize} sub={showSubtitle} tagline={showTagline} />
              </div>
              <div className="bt-footer">
                <div className="bt-info">
                  <b>Primary (Light Background)</b>
                  <span>Gradient Ribbon + Deep Navy Wordmark (#0A1128)</span>
                </div>
                <button
                  type="button"
                  className="btn-asset-dl"
                  title="Download Primary SVG"
                  onClick={() => downloadSvg('anqora-logo-primary-light.svg', SVG_PRIMARY_LIGHT)}
                >
                  <Download size={14} /> SVG
                </button>
              </div>
            </div>

            {/* Reverse Dark Mode */}
            <div className="brand-tile t-dark">
              <div className="bt-content">
                <Logo variant="dark" size={logoSize} sub={showSubtitle} tagline={showTagline} />
              </div>
              <div className="bt-footer">
                <div className="bt-info">
                  <b>Reverse / Dark Mode</b>
                  <span>Gradient Ribbon + Crisp White Wordmark (#FFFFFF) on #050814</span>
                </div>
                <button
                  type="button"
                  className="btn-asset-dl"
                  title="Download Reverse Dark SVG"
                  onClick={() => downloadSvg('anqora-logo-reverse-dark.svg', SVG_REVERSE_DARK)}
                >
                  <Download size={14} /> SVG
                </button>
              </div>
            </div>

            {/* Monochrome */}
            <div className="brand-tile t-mono">
              <div className="bt-content">
                <Logo variant="mono" size={logoSize} sub={showSubtitle} tagline={showTagline} />
              </div>
              <div className="bt-footer">
                <div className="bt-info">
                  <b>Monochrome</b>
                  <span>Solid Deep Obsidian/Black (#050814) for high-contrast prints</span>
                </div>
                <button
                  type="button"
                  className="btn-asset-dl"
                  title="Download Monochrome SVG"
                  onClick={() => downloadSvg('anqora-logo-monochrome.svg', SVG_MONOCHROME)}
                >
                  <Download size={14} /> SVG
                </button>
              </div>
            </div>
          </Reveal>

          {/* APP ICON & FAVICON SUITE */}
          <Reveal className="brand-app-suite-card" delay={120}>
            <div className="suite-header">
              <div>
                <h3>App Icon & Favicon Suite</h3>
                <p>Curated squircle and circle variants featuring the gradient ribbon "A" on both dark navy canvas and clean white surfaces.</p>
              </div>
              <span className="pill">4 Official Formats</span>
            </div>

            <div className="app-icons-grid">
              {/* Squircle Dark */}
              <div className="icon-variant-box">
                <div className="icon-preview-stage stage-dark">
                  <img src="/icon-squircle-dark.svg" alt="Squircle Dark App Icon" />
                </div>
                <div className="icon-variant-meta">
                  <b>Squircle · Dark Navy</b>
                  <code>#050814 Canvas</code>
                  <a href="/icon-squircle-dark.svg" download="anqora-icon-squircle-dark.svg" className="link-arrow">
                    <Download size={13} /> SVG
                  </a>
                </div>
              </div>

              {/* Squircle Light */}
              <div className="icon-variant-box">
                <div className="icon-preview-stage stage-light">
                  <img src="/icon-squircle-light.svg" alt="Squircle Light App Icon" />
                </div>
                <div className="icon-variant-meta">
                  <b>Squircle · Clean White</b>
                  <code>#FFFFFF Canvas</code>
                  <a href="/icon-squircle-light.svg" download="anqora-icon-squircle-light.svg" className="link-arrow">
                    <Download size={13} /> SVG
                  </a>
                </div>
              </div>

              {/* Circle Dark */}
              <div className="icon-variant-box">
                <div className="icon-preview-stage stage-dark">
                  <img className="circ" src="/icon-circle-dark.svg" alt="Circle Dark App Icon" />
                </div>
                <div className="icon-variant-meta">
                  <b>Circle · Dark Navy</b>
                  <code>#050814 Canvas</code>
                  <a href="/icon-circle-dark.svg" download="anqora-icon-circle-dark.svg" className="link-arrow">
                    <Download size={13} /> SVG
                  </a>
                </div>
              </div>

              {/* Circle Light */}
              <div className="icon-variant-box">
                <div className="icon-preview-stage stage-light">
                  <img className="circ" src="/icon-circle-light.svg" alt="Circle Light App Icon" />
                </div>
                <div className="icon-variant-meta">
                  <b>Circle · Clean White</b>
                  <code>#FFFFFF Canvas</code>
                  <a href="/icon-circle-light.svg" download="anqora-icon-circle-light.svg" className="link-arrow">
                    <Download size={13} /> SVG
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. LOGO ANATOMY & GEOMETRIC PHILOSOPHY */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Anatomy"
            title="Logomark Ribbon & Wordmark Architecture"
            lead="The Anqora visual signature is constructed on rigorous geometric foundations, expressing dynamic connectivity and intelligent data routing."
          />

          <div className="grid g-3">
            <div className="anatomy-card">
              <div className="ac-icon">
                <LogoMark />
              </div>
              <h4>Continuous Ribbon "A"</h4>
              <p>A dynamic, uninterrupted ribbon forming a stylized geometric letter <b>"A"</b>. Features a dimensional loop with a smooth chromatic transition from electric blue through cyan to neon green.</p>
              <ul className="ac-list">
                <li><b>Apex & Legs:</b> 5.5px stroke width with rounded vertices</li>
                <li><b>Dimensional Crossbar:</b> 4.5px loop weaving through depth</li>
                <li><b>Depth Lighting:</b> 32% directional shadow gradient overlay</li>
              </ul>
            </div>

            <div className="anatomy-card">
              <div className="ac-icon ac-wordmark">
                <Wordmark />
              </div>
              <h4>Notched 'q' Typography</h4>
              <p>The <b>Anqora</b> wordmark is set in bold, rounded geometric letterforms. The defining brand characteristic is the <b>subtle curved notch in the 'q'</b>.</p>
              <ul className="ac-list">
                <li><b>Curved Notch:</b> Upward sweeping spur terminal echoing ribbon momentum</li>
                <li><b>Geometric Bowl:</b> Pure circular bowl with proportional counters</li>
                <li><b>Weight:</b> Extra bold 900 weight with optical kerning</li>
              </ul>
            </div>

            <div className="anatomy-card">
              <div className="ac-icon ac-sub">
                <span className="logo-sub">SOLUTIONS PVT. LTD.</span>
                <span className="logo-tagline" style={{ marginTop: '0.6rem' }}>CONNECT • ENGAGE • GROW</span>
              </div>
              <h4>Legal Subtitle & Tagline</h4>
              <p>Balanced legal entity and brand purpose lockup with a dual-color dividing underline.</p>
              <ul className="ac-list">
                <li><b>Legal Subtitle:</b> <code>SOLUTIONS PVT. LTD.</code> in spaced uppercase sans-serif</li>
                <li><b>Dividing Underline:</b> Gradient line transitioning from Electric Blue to Neon Green</li>
                <li><b>Tagline:</b> <code>CONNECT • ENGAGE • GROW</code> set in wide tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COLOR PALETTE & DESIGN TOKENS */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Color Tokens"
            title="Extracted Palette & Variables"
            lead="Official color tokens implemented across the CSS variables system. Click any hex code or variable name to copy directly to your clipboard."
          />

          <div className="token-groups-container">
            {TOKEN_GROUPS.map((group) => (
              <div key={group.title} className="token-group">
                <div className="tg-header">
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                </div>

                <div className="token-grid">
                  {group.tokens.map((t) => (
                    <div key={t.token} className={`token-card ${t.border ? 'has-border' : ''}`}>
                      <div
                        className="token-swatch"
                        style={{ background: t.value }}
                      >
                        {t.isGradient && <span className="gradient-badge">Gradient</span>}
                      </div>
                      <div className="token-details">
                        <div className="token-title-row">
                          <b>{t.name}</b>
                        </div>
                        <p className="token-note">{t.note}</p>

                        <div className="token-actions">
                          <button
                            type="button"
                            className="token-copy-btn"
                            onClick={() => copyToClipboard(t.value, `val-${t.token}`)}
                          >
                            <span>{t.value.length > 22 ? `${t.value.slice(0, 20)}...` : t.value}</span>
                            {copiedToken === `val-${t.token}` ? <Check size={13} className="text-success" /> : <Copy size={13} />}
                          </button>
                          <button
                            type="button"
                            className="token-copy-btn token-var"
                            onClick={() => copyToClipboard(`var(${t.token})`, `var-${t.token}`)}
                          >
                            <span>var({t.token})</span>
                            {copiedToken === `var-${t.token}` ? <Check size={13} className="text-success" /> : <Copy size={13} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DESIGN SYSTEM TOKENS IN ACTION (CPaaS UI SHOWCASE) */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Implementation"
            title="Design Tokens in Action"
            lead="Experience how the brand palette and gradient tokens drive user engagement across enterprise communication components."
          />

          <div className="grid g-3">
            {/* Component 1: Action State */}
            <div className="card">
              <span className="pill"><Sparkles size={13} /> Interactive Buttons</span>
              <h3>Primary & Ghost Actions</h3>
              <p>Buttons leverage <code>--gradient-brand</code> with luminous multi-layered box shadows.</p>
              <div className="preview-action-row" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-primary btn-sm">Talk to Experts</button>
                <button type="button" className="btn btn-ghost btn-sm">Explore API Docs</button>
              </div>
            </div>

            {/* Component 2: Multi-Channel Badges */}
            <div className="card">
              <span className="pill"><Layers size={13} /> CPaaS Channels</span>
              <h3>Multi-Channel Ecosystem</h3>
              <p>Color accents convey channel identity, deliverability speed, and real-time health.</p>
              <div className="channel-chips-preview" style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="pill" style={{ background: 'rgba(0,118,255,0.1)', color: '#0076FF' }}>SMS Gateway</span>
                <span className="pill" style={{ background: 'rgba(34,229,92,0.12)', color: '#10B981' }}>WhatsApp API</span>
                <span className="pill" style={{ background: 'rgba(0,210,255,0.12)', color: '#00D2FF' }}>RCS Business</span>
                <span className="pill" style={{ background: 'rgba(11,19,43,0.08)', color: '#0A1128' }}>Voice Engine</span>
              </div>
            </div>

            {/* Component 3: Dark Mode Metric Panel */}
            <div className="card" style={{ background: 'var(--bg-dark-primary)', color: '#fff', borderColor: 'var(--border-dark)' }}>
              <span className="pill" style={{ background: 'rgba(0,210,255,0.12)', color: 'var(--color-cyan-glow)' }}>Enterprise Console</span>
              <h3 style={{ color: '#fff' }}>99.99% Reliability</h3>
              <p style={{ color: 'var(--text-muted-dark)' }}>Live carrier delivery throughput across tier-1 operators with intelligent fallback.</p>
              <div style={{ marginTop: '1.25rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ width: '92%', height: '100%', background: 'var(--gradient-brand)', borderRadius: '999px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
