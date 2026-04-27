import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import {Theme} from "./interfaces/navbar.type.ts";

function App() {

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';

    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });
  
  const [showCursor, setShowCursor] = useState(false);

  // Apply theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Show custom cursor only on larger screens
  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative min-h-screen">
      {showCursor && <CustomCursor />}
      
      <div className="fixed z-50 bottom-6 right-6">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      
      <Navbar theme={theme} />
      
      <main>
        <AnimatePresence>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Experience />
          <Contact />
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;