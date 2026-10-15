/**
 * Contact / partnership submission API hook.
 *
 * Wire to your backend by setting VITE_CONTACT_ENDPOINT in `.env`, e.g.
 *   VITE_CONTACT_ENDPOINT=https://api.anqora.com/v1/leads
 * When unset, submissions are simulated so the UI can be demoed end-to-end.
 */
export type ServiceInterest = 'SMS' | 'WhatsApp Business API' | 'RCS' | 'Voice' | 'Multiple Services / Partnership';

export interface LeadPayload {
  fullName: string;
  email: string;
  company: string;
  service: ServiceInterest | '';
  message: string;
  source: 'contact' | 'partnership';
}

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export async function submitLead(payload: LeadPayload): Promise<{ ok: true }> {
  if (!ENDPOINT) {
    await new Promise((r) => setTimeout(r, 1200));
    console.info('[Anqora] Simulated lead submission:', payload);
    return { ok: true };
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return { ok: true };
}
