import { Mail, Building2, Clock } from 'lucide-react';
import { useSeo } from '../router';
import { ContactForm } from '../components/ContactForm';

export default function Contact() {
  useSeo('Contact Us', 'Talk to Anqora about SMS, WhatsApp Business API, RCS, Voice or partnerships.');
  return (
    <section className="hero page-hero" style={{ paddingBottom: 'clamp(4rem, 9vw, 7rem)' }}>
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="container split page-enter" style={{ alignItems: 'start' }}>
        <div>
          <span className="eyebrow">Contact Us</span>
          <h1>Let’s Start a <span className="text-grad">Conversation.</span></h1>
          <p className="lead">Your next customer communication opportunity starts here. Tell us what your business needs, and let’s explore the right solution together.</p>
          <div className="contact-info">
            <div><span className="icon-box"><Mail size={20} /></span><span><small>Email</small>hello@anqora.com</span></div>
            <div><span className="icon-box"><Building2 size={20} /></span><span><small>Company</small>Anqora Solutions Pvt. Ltd.</span></div>
            <div><span className="icon-box"><Clock size={20} /></span><span><small>Response time</small>Within one business day</span></div>
          </div>
        </div>
        <div className="form-card" style={{ color: 'var(--ink)' }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
