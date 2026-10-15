import {
  MessageSquare, MessageCircle, Smartphone, Phone, Layers, Plug, TrendingUp, ShieldCheck, Handshake,
  Landmark, ShoppingBag, HeartPulse, Cpu, Plane, Headphones, UserPlus, KeyRound, Bell, Sparkles, LifeBuoy, Repeat,
  type LucideIcon,
} from 'lucide-react';

export interface Solution {
  id: string; name: string; short: string; tagline: string; icon: LucideIcon; desc: string; features: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'sms', name: 'SMS Solutions', short: 'SMS', tagline: 'Reliable. Direct. Scalable.', icon: MessageSquare,
    desc: 'Built for speed, broad accessibility, and business-critical messaging at high volumes — reaching customers on virtually every mobile device.',
    features: ['OTPs & authentication messages', 'Transactional alerts & notifications', 'Promotional messaging', 'Customer updates & reminders'],
  },
  {
    id: 'whatsapp', name: 'WhatsApp Business API', short: 'WhatsApp', tagline: 'Personal. Interactive. Convenient.', icon: MessageCircle,
    desc: 'Deliver richer customer experiences through eligible WhatsApp platform capabilities, on the app your customers already open every day.',
    features: ['Customer notifications', 'Customer support conversations', 'Approved message templates', 'Interactive customer journeys'],
  },
  {
    id: 'rcs', name: 'RCS Messaging', short: 'RCS', tagline: 'Rich. Branded. Interactive.', icon: Smartphone,
    desc: 'Upgrade traditional messaging with branded, app-like experiences on supported networks and devices.',
    features: ['Branded business messaging', 'Rich media & product cards', 'Suggested replies and actions', 'Interactive customer campaigns'],
  },
  {
    id: 'voice', name: 'Voice Solutions', short: 'Voice', tagline: 'Human. Immediate. Connected.', icon: Phone,
    desc: 'Real-time customer communication through voice workflows — for moments when a call says it best.',
    features: ['OTP & verification calls', 'Automated voice notifications', 'Customer service communication', 'Voice-enabled engagement workflows'],
  },
];

export const WHY = [
  { icon: Layers, title: 'Unified Communication Approach', desc: 'Messaging, rich interactions, and voice brought together in one connected ecosystem.' },
  { icon: Plug, title: 'Integration-Ready Solutions', desc: 'APIs and workflows designed to fit seamlessly into your existing applications and platforms.' },
  { icon: TrendingUp, title: 'Built to Scale', desc: 'Technology designed to grow with your volumes, channels, and evolving business needs.' },
  { icon: ShieldCheck, title: 'Responsible Communication', desc: 'A strong focus on consent, platform compliance, and data protection in every interaction.' },
  { icon: Handshake, title: 'A Partnership Mindset', desc: 'We work alongside you — understanding your goals and shaping solutions around them.' },
];

export const INDUSTRIES = [
  { icon: Landmark, name: 'Banking & Fintech', tags: ['Authentication', 'Transaction alerts', 'Service notifications'] },
  { icon: ShoppingBag, name: 'E-commerce & Retail', tags: ['Order updates', 'Delivery alerts', 'Customer engagement'] },
  { icon: HeartPulse, name: 'Healthcare', tags: ['Appointment reminders', 'Patient updates', 'Service communication'] },
  { icon: Cpu, name: 'Technology & SaaS', tags: ['User verification', 'Product notifications', 'Lifecycle communication'] },
  { icon: Plane, name: 'Travel & Hospitality', tags: ['Booking confirmations', 'Travel alerts', 'Guest communication'] },
  { icon: Headphones, name: 'Customer Service', tags: ['Service updates', 'Customer assistance', 'Voice-enabled workflows'] },
];

export const USE_CASES = [
  { icon: UserPlus, title: 'Customer Onboarding', desc: 'Welcome new users with timely, guided messages that build confidence from day one.', channels: ['SMS', 'WhatsApp', 'RCS'] },
  { icon: KeyRound, title: 'Authentication (OTP)', desc: 'Secure sign-ins and transactions with fast one-time passwords and verification calls.', channels: ['SMS', 'Voice', 'WhatsApp'] },
  { icon: Bell, title: 'Transactional Communication', desc: 'Keep customers informed with order, payment, booking, and account alerts.', channels: ['SMS', 'WhatsApp'] },
  { icon: Sparkles, title: 'Customer Engagement', desc: 'Personalized campaigns with rich media, product cards, and suggested actions.', channels: ['RCS', 'WhatsApp'] },
  { icon: LifeBuoy, title: 'Customer Support', desc: 'Resolve queries faster through conversational messaging and voice workflows.', channels: ['WhatsApp', 'Voice'] },
  { icon: Repeat, title: 'Retention & Re-engagement', desc: 'Win back inactive customers with relevant reminders and well-timed offers.', channels: ['SMS', 'RCS', 'WhatsApp'] },
];
