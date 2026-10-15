import type { JSX } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { usePath } from './router';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import WhyAnqora from './pages/WhyAnqora';
import Industries from './pages/Industries';
import Api from './pages/Api';
import UseCases from './pages/UseCases';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import { Legal, NotFound } from './pages/Misc';
import Brand from './pages/Brand';

const ROUTES: Record<string, () => JSX.Element> = {
  '/': Home,
  '/about': About,
  '/solutions': Solutions,
  '/why-anqora': WhyAnqora,
  '/industries': Industries,
  '/api': Api,
  '/use-cases': UseCases,
  '/partnerships': Partnerships,
  '/contact': Contact,
  '/brand': Brand,
  '/privacy': () => <Legal kind="privacy" />,
  '/terms': () => <Legal kind="terms" />,
};

export default function App() {
  const path = usePath();
  const Page = ROUTES[path] ?? NotFound;
  return (
    <>
      <a href="#main" className="sr-skip">Skip to content</a>
      <Header />
      <main id="main" key={path}>
        <Page />
      </main>
      <Footer />
    </>
  );
}
