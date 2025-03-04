import Navbar from './components/Header';
import Hero from './components/Navbar';
import Features from './components/Services';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Navbar />
      <About />
      <Features />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
