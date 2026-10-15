import { ArrowRight } from 'lucide-react';
import { Link, useSeo } from '../router';
import { PageHero } from '../components/ui';

export function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions';
  useSeo(title, `${title} for Anqora Solutions Pvt. Ltd.`);
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead="This document is being finalised. For any questions in the meantime, please contact our team." />
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="lead">Anqora Solutions Pvt. Ltd. is committed to responsible communication, including consent, platform compliance, and data protection. The full {title.toLowerCase()} will be published here.</p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Contact Us <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  useSeo('Page not found', 'The page you are looking for does not exist.');
  return (
    <PageHero eyebrow="404" title="This conversation took a wrong turn." lead="The page you’re looking for doesn’t exist or has moved.">
      <div className="hero-actions"><Link to="/" className="btn btn-primary">Back to Home <ArrowRight size={18} /></Link></div>
    </PageHero>
  );
}
