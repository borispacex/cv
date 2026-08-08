import { motion } from 'framer-motion';
import {Mail, MapPin, Phone} from 'lucide-react';
import SectionHeading from './SectionHeading';
import {AboutData} from "../interfaces/about.type.ts";

const About = () => {
  const aboutData: AboutData = {
    image: `${import.meta.env.BASE_URL}image/profile.jpg`,
    description: `Desarrollador Full Stack con experiencia en proyectos de alto impacto en el sector público y financiero. Especializado en microservicios, APIs y desarrollo web moderno con Java, Spring Boot, Angular, .NET y PostgreSQL. Domino herramientas DevOps como Docker, Jenkins y despliegues automatizados.`,
    bio: `Soy un profesional orientado a resultados, comprometido con la calidad y con la capacidad de adaptar arquitecturas a necesidades reales de negocio. Trabajo de forma colaborativa y siempre busco maximizar la escalabilidad y el rendimiento de cada solución.`,
    contactInfo: [
      {
        icon: <Mail size={24} />,
        title: "Correo electrónico",
        value: "borisvargaspaucara@gmail.com",
        link: "mailto:borisvargaspaucara@gmail.com"
      },
      {
        icon: <Phone size={24} />,
        title: "Celular",
        value: "+591 60514138",
        link: "tel:+59160514138"
      },
      {
        icon: <MapPin size={24} />,
        title: "Dirección",
        value: " La Paz, Bolivia",
        link: "https://maps.app.goo.gl/ELoUUWX5beygVkr1A",
      }
    ]
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 }
    })
  };

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 }
    })
  };

  return (
    <section id="about" className="about-section section bg-gray-50 dark:bg-gray-900/50 scroll-mt-20 sm:scroll-mt-24">
      <div className="container-custom">
        <SectionHeading title="Acerca de mí" subtitle="Conóceme mejor" />
        
        <div className="about-grid mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="about-photo relative overflow-hidden shadow-xl rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <img 
              src={aboutData.image}
              alt="borispacex Portrait"
              className="object-cover object-center w-full h-full"
            />
            
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/80 to-transparent">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold">Boris Vargas</h3>
                <p className="text-gray-200">Software Developer | Junior Devops</p>
              </div>
            </div>
          </motion.div>
          
          <div className="about-content flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={2}
            >
              <h3 className="about-title mb-4 text-2xl font-bold">Quien soy</h3>
              <p className="about-description mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                {aboutData.description}
              </p>
              <p className="about-bio mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
                {aboutData.bio}
              </p>
            </motion.div>
            
            <div className="about-contact-list">
                {aboutData.contactInfo.map((item, index) => (
                  <motion.a
                    key={`contact-${item.title}`}
                      href={item.link}
                      target={item.title === "Dirección" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="about-contact-card card my-2 flex items-start p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                      variants={contactVariants}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ y: -5 }}
                  >
                    <div className="about-contact-icon mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="about-contact-title mb-1 text-lg font-semibold">{item.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                    </div>
                  </motion.a>
              ))}
            </div>
            
            <motion.div 
              className="about-action mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={4}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ponte en contacto
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
