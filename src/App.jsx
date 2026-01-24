import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Aos from 'aos';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {/* Azure Depths */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
        }}
      />
      {/* Your Content/Components */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
