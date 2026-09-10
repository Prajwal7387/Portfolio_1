import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ProblemSolving from './components/ProblemSolving';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

export default function App() {
  return (
    <>
      {/* Custom Cursor */}
      <CursorEffect />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <ProblemSolving />
        <Activities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
