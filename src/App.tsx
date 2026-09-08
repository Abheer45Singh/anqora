import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Platform } from './components/Platform';
import { Industries } from './components/Industries';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Platform />
        <Industries />
      </main>
      <Footer />
    </>
  );
}

export default App;
