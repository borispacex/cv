import { motion } from 'framer-motion';
import {ChevronDown, Facebook, Github, Instagram, Linkedin, Twitter} from 'lucide-react';

const Hero = () => {

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  return (
    <section id="inicio" className="hero-section relative flex min-h-svh items-center justify-center overflow-hidden py-24 sm:py-20 lg:h-screen lg:py-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 opacity-80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`hero-bg-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-primary-300/20 to-secondary-300/20 dark:from-primary-700/10 dark:to-secondary-700/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 15 + 10,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="hero-content flex flex-col items-center text-center">
          <motion.div
            className="hero-badge mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              Perfil profesional
            </span>
          </motion.div>
          
          <motion.h1 
            className="hero-title mb-6 leading-tight max-w-2xl text-4xl sm:text-5xl md:text-5xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Desarrollador Full Stack especializado en <span className="text-gradient">Backend y DevOps</span>
          </motion.h1>

          <motion.p
              className="hero-intro text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg mb-4"
              {...fadeUp}
          >
            Soy <span className="text-gradient">Boris Vargas</span>, desarrollador de software con experiencia en sistemas para los sectores público, financiero y tecnológico.
          </motion.p>

          <motion.p
              className="hero-description text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
          >
            Especializado en Java, TypeScript, APIs REST, microservicios, Docker y automatización de despliegues.
          </motion.p>
          <motion.div
            className="hero-actions flex flex-col sm:flex-row flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a
                href="https://drive.google.com/file/d/1JM5-nCUgeT1izmJ3iCgCqbYOrgCRp6_-/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-6 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              Descargar CV
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactarme
            </motion.a>
          </motion.div>
          
          <motion.div
            className="hero-social flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.a
                href="https://www.facebook.com/boris.vargaspaucara.9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                whileHover={{ y: -3 }}
                aria-label="Facebook"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
                href="https://www.instagram.com/borispacex/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                whileHover={{ y: -3 }}
                aria-label="Instagram"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/borispacex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
              whileHover={{ y: -3 }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/boris-vargas-paucara-b5485a145/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://x.com/borispacex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
              whileHover={{ y: -3 }}
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        href="#about"
        className="hero-scroll absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center justify-center gap-2 text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: 1.2,
          y: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <span className="text-sm font-medium leading-none">Ir abajo</span>
        <ChevronDown size={20} className="shrink-0" aria-hidden="true" />
      </motion.a>
    </section>
  );
};

export default Hero;
