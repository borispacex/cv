import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {NavbarProps, NavLink} from "../interfaces/navbar.type.ts";

const navLinks: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'about', label: 'Acerca de mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'education', label: 'Educación' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
];

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine which section is currently in view
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/90'
          : 'bg-white/60 backdrop-blur-sm dark:bg-gray-950/60'
      }`}
    >
      <div className="navbar-inner container-custom py-4 flex items-center justify-between">
        <motion.a 
          href="#inicio"
          className="group flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-9 w-1 rounded-full bg-gradient-to-b from-primary-500 to-secondary-500 transition-transform group-hover:scale-y-110" aria-hidden="true" />
          <span className="flex flex-col leading-none">
            <span className="text-gradient font-display text-lg font-bold tracking-tight sm:text-xl">Boris Vargas</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
              Currículum Vitae
            </span>
          </span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <motion.div 
            className="flex space-x-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.1 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={`navlink-${link.id}`}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="mt-0.5 h-0.5 bg-primary-500 dark:bg-primary-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden btn btn-outline p-2"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900 lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={`navlink-mobile-${link.id}`}
                href={`#${link.id}`}
                className={`px-4 py-3 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
