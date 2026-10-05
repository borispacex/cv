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
import ThemeToggle from './components/ThemeToggle';
import {Theme} from "./interfaces/navbar.type.ts";
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n, t } = useTranslation();

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';

    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });
  
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

  useEffect(() => {
    const language = i18n.resolvedLanguage === 'en' ? 'en' : 'es';
    document.documentElement.lang = language === 'en' ? 'en' : 'es-BO';
    document.title = t('seo.title');

    const setMeta = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', t('seo.description'));
    setMeta('meta[property="og:locale"]', language === 'en' ? 'en_US' : 'es_BO');
    setMeta('meta[property="og:title"]', t('seo.title'));
    setMeta('meta[property="og:description"]', t('seo.socialDescription'));
    setMeta('meta[property="og:image:alt"]', t('seo.socialImageAlt'));
    setMeta('meta[name="twitter:title"]', t('seo.title'));
    setMeta('meta[name="twitter:description"]', t('seo.socialDescription'));
    setMeta('meta[name="twitter:image:alt"]', t('seo.socialImageAlt'));
  }, [i18n.resolvedLanguage, t]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative min-h-screen">
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
