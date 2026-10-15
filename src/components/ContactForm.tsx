import { useState, type FormEvent } from 'react';
import { ArrowRight, CircleAlert, CircleCheck, LoaderCircle } from 'lucide-react';
import { submitLead, type LeadPayload } from '../lib/contactApi';

type Fields = Omit<LeadPayload, 'source'>;
type Errors = Partial<Record<keyof Fields, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const SERVICES = ['SMS', 'WhatsApp Business API', 'RCS', 'Voice', 'Multiple Services / Partnership'] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FREE_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.fullName.trim().length < 2) e.fullName = 'Please enter your full name.';
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.';
  else if (FREE_DOMAINS.includes(f.email.split('@')[1]?.toLowerCase())) e.email = 'Please use your business email address.';
  if (f.company.trim().length < 2) e.company = 'Please enter your company name.';
  if (f.message.length > 2000) e.message = 'Message must be under 2000 characters.';
  return e;
}

export function ContactForm({ source = 'contact', idPrefix = 'contact' }: { source?: LeadPayload['source']; idPrefix?: string }) {
  const initial: Fields = {
    fullName: '',
    email: '',
    company: '',
    service: source === 'partnership' ? 'Multiple Services / Partnership' : '',
    message: '',
  };
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');

  const set = (k: keyof Fields, v: string) => {
    const next = { ...fields, [k]: v };
    setFields(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Fields) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(fields));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validate(fields);
    setErrors(v);
    setTouched({ fullName: true, email: true, company: true, message: true });
    if (Object.keys(v).length) {
      document.getElementById(`${idPrefix}-${Object.keys(v)[0]}`)?.focus();
      return;
    }
    setStatus('submitting');
    setServerError('');
    try {
      await submitLead({ ...fields, source });
      setStatus('success');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="success-state" role="status" aria-live="polite">
        <div className="ok"><CircleCheck size={36} /></div>
        <h3>Thank you, {fields.fullName.split(' ')[0]}!</h3>
        <p>Your message has been received. A member of the Anqora team will reach out to {fields.email} shortly.</p>
        <button className="btn btn-ghost" onClick={() => { setFields(initial); setTouched({}); setStatus('idle'); }}>
          Send another message
        </button>
      </div>
    );
  }

  const err = (k: keyof Fields) =>
    touched[k] && errors[k] ? (
      <p className="field-error" id={`${idPrefix}-${k}-err`}><CircleAlert size={14} /> {errors[k]}</p>
    ) : null;
  const aria = (k: keyof Fields) => ({
    id: `${idPrefix}-${k}`,
    'aria-invalid': !!(touched[k] && errors[k]),
    'aria-describedby': touched[k] && errors[k] ? `${idPrefix}-${k}-err` : undefined,
  });
  const cls = (k: keyof Fields, extra = '') => `field ${extra} ${touched[k] && errors[k] ? 'invalid' : ''}`;

  return (
    <form onSubmit={onSubmit} noValidate aria-label={source === 'partnership' ? 'Partnership inquiry form' : 'Contact form'}>
      {status === 'error' && (
        <div className="alert alert-error" role="alert">
          <CircleAlert size={18} /> <span>We couldn’t send your message ({serverError}). Please try again.</span>
        </div>
      )}
      <div className="form-grid">
        <div className={cls('fullName')}>
          <label htmlFor={`${idPrefix}-fullName`}>Full Name <span className="req">*</span></label>
          <input {...aria('fullName')} required autoComplete="name" placeholder="Jane Doe" value={fields.fullName}
            onChange={(e) => set('fullName', e.target.value)} onBlur={() => blur('fullName')} />
          {err('fullName')}
        </div>
        <div className={cls('email')}>
          <label htmlFor={`${idPrefix}-email`}>Business Email <span className="req">*</span></label>
          <input {...aria('email')} type="email" required autoComplete="email" placeholder="jane@company.com" value={fields.email}
            onChange={(e) => set('email', e.target.value)} onBlur={() => blur('email')} />
          {err('email')}
        </div>
        <div className={cls('company')}>
          <label htmlFor={`${idPrefix}-company`}>Company Name <span className="req">*</span></label>
          <input {...aria('company')} required autoComplete="organization" placeholder="Acme Pvt. Ltd." value={fields.company}
            onChange={(e) => set('company', e.target.value)} onBlur={() => blur('company')} />
          {err('company')}
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-service`}>Service of Interest</label>
          <select id={`${idPrefix}-service`} value={fields.service} onChange={(e) => set('service', e.target.value)}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className={cls('message', 'full')}>
          <label htmlFor={`${idPrefix}-message`}>Requirements or Message</label>
          <textarea {...aria('message')} placeholder="Tell us about your use case, expected volumes, and timelines…" value={fields.message}
            onChange={(e) => set('message', e.target.value)} onBlur={() => blur('message')} />
          {err('message')}
        </div>
      </div>
      <div className="form-foot">
        <small>By submitting, you agree to be contacted by Anqora regarding your inquiry. We respect your privacy.</small>
        <button id={`${idPrefix}-submit`} type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? <><LoaderCircle size={18} className="spin" /> Sending…</> : <>Talk to Our Team <ArrowRight size={18} /></>}
        </button>
      </div>
    </form>
  );
}
