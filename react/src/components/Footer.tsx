import {ArrowUp, Github, Linkedin, Facebook, Instagram, Twitter} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
      <footer className="footer-section border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="footer-inner container-custom py-8 sm:py-10">

          {/* 🔹 TOP */}
          <div className="footer-top flex flex-col items-center justify-between gap-5 sm:flex-row">

            {/* Branding */}
            <motion.a
                href="#about"
                aria-label="Ir a la sección Acerca de mí"
            >
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  Boris Vargas
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Developer | Junior DevOps
                </p>
              </div>
            </motion.a>


            {/* Social */}
            <div className="footer-social flex gap-3 sm:gap-4">
              {[
                {
                  href: "https://www.facebook.com/boris.vargaspaucara.9",
                  icon: <Facebook size={18} />,
                  label: "Facebook"
                },
                {
                  href: "https://www.instagram.com/borispacex/",
                  icon: <Instagram size={18} />,
                  label: "Instagram"
                },
                {
                  href: "https://github.com/borispacex",
                  icon: <Github size={18} />,
                  label: "GitHub"
                },
                {
                  href: "https://www.linkedin.com/in/boris-vargas-paucara-b5485a145/",
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn"
                },
                {
                  href: "https://x.com/borispacex",
                  icon: <Twitter size={18} />,
                  label: "Twitter"
                }
                ].map((item) => (
                  <motion.a
                    key={`footer-link-${item.label}`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="w-10 h-10 rounded-full
                bg-gray-100 dark:bg-gray-800
                flex items-center justify-center
                text-gray-600 dark:text-gray-300
                hover:bg-primary-500 hover:text-white
                transition-all"
                  >
                    {item.icon}
                  </motion.a>
              ))}
            </div>
          </div>

          {/* 🔹 DIVIDER */}
          <div className="footer-divider mt-6 border-t border-gray-200 dark:border-gray-800 sm:mt-8" />

          {/* 🔹 BOTTOM */}
          <div className="footer-bottom mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Boris Vargas. Todos los derechos reservados.
            </p>

            <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Volver al inicio de la página"
                className="flex items-center gap-2 text-sm
            text-gray-600 dark:text-gray-400
            hover:text-primary-500 dark:hover:text-primary-400
            transition-colors"
            >
              <span>Volver arriba</span>
              <ArrowUp size={16} />
            </motion.button>

          </div>

        </div>
      </footer>
  );
};

export default Footer;
