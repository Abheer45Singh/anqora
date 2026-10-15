import { Plug, Workflow, Network, TrendingUp, ClipboardList, FlaskConical, CircleCheck } from 'lucide-react';
import { useSeo } from '../router';
import { PageHero, Reveal, SectionHead, CtaBand } from '../components/ui';

const HIGHLIGHTS = [
  { icon: Plug, t: 'API-based communication integration', d: 'Connect messaging and voice capabilities directly into your applications.' },
  { icon: Workflow, t: 'Automated messaging workflows', d: 'Trigger the right communication from real business events.' },
  { icon: Network, t: 'Application & platform connectivity', d: 'Work alongside your CRM, commerce, and support platforms.' },
  { icon: TrendingUp, t: 'Scalable communication use cases', d: 'From a single alert to millions of messages as you grow.' },
  { icon: ClipboardList, t: 'Business-aligned integration planning', d: 'We plan integrations around outcomes, not just endpoints.' },
];

export default function Api() {
  useSeo('API & Integrations', 'Integrate SMS, WhatsApp, RCS and Voice into your applications with Anqora communication APIs and workflows.');
  return (
    <>
      <PageHero eyebrow="API & Integrations" title={<>Your Applications. Our Communication Capabilities. <span className="text-grad">One Connected Experience.</span></>}
        lead="Communication That Fits Your Ecosystem" />

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Built for builders" title="Integrate once. Communicate everywhere." lead="Bring messaging and voice into your products and workflows with integration options designed for enterprise needs." />
            <ul className="check-list" style={{ marginTop: 0 }}>
              {['Simple, consistent request patterns across channels', 'Delivery status updates for your systems', 'Designed with security and consent in mind'].map((x) => (
                <li key={x}><CircleCheck size={18} /> {x}</li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="code-window" role="img" aria-label="Illustrative API request example">
              <div className="code-bar"><i /><i /><i /><span>send-message.js · illustrative</span></div>
              <pre>
<span className="tk-c">// Illustrative example — final API reference coming soon</span>{'\n'}
<span className="tk-k">const</span> res = <span className="tk-k">await</span> <span className="tk-f">fetch</span>(<span className="tk-s">'https://api.anqora.com/v1/messages'</span>, {'{'}{'\n'}
{'  '}method: <span className="tk-s">'POST'</span>,{'\n'}
{'  '}headers: {'{'} Authorization: <span className="tk-s">`Bearer ${'{'}API_KEY{'}'}`</span> {'}'},{'\n'}
{'  '}body: <span className="tk-f">JSON.stringify</span>({'{'}{'\n'}
{'    '}channel: <span className="tk-s">'whatsapp'</span>,{'\n'}
{'    '}to: <span className="tk-s">'+91XXXXXXXXXX'</span>,{'\n'}
{'    '}template: <span className="tk-s">'order_shipped'</span>,{'\n'}
{'    '}fallback: [<span className="tk-s">'rcs'</span>, <span className="tk-s">'sms'</span>],{'\n'}
{'    '}ttl: <span className="tk-n">300</span>{'\n'}
{'  '}{'}'}){'\n'}
{'}'});
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="Key Highlights" title="Everything you need to connect" />
          <div className="grid g-3">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.t} delay={(i % 3) * 90}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="icon-box"><h.icon size={22} /></span>
                  <h3>{h.t}</h3><p>{h.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <div className="notice" style={{ height: '100%' }} role="note">
                <FlaskConical size={24} />
                <div>
                  <h4>Enterprise integration options</h4>
                  <p>Our developer sandbox and verified API documentation are coming soon. Enterprise teams can request early integration support today.</p>
                  <span className="pill" style={{ marginTop: '.85rem' }}>Developer sandbox · Coming soon</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title="Plan your integration with us." text="Share your stack and use cases — our team will help map the right integration approach." />
    </>
  );
}
