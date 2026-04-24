import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Maximize } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';

type Category = 'all' | 'articles' | 'web' | 'api';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: Exclude<Category, 'all'>;
  demoLink: string;
  githubLink: string;
  details: string;
  features: string[];
}

const Projects = () => {
  const [filter, setFilter] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories: {id: Category; name: string;}[] = [
    { id: 'all', name: 'Todos' },
    { id: 'articles', name: 'Artículos' },
    { id: 'web', name: 'Web' },
    { id: 'api', name: 'API' },
 
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Instalación Debian + Zurg",
      description: "Guía completa para instalar y configurar Debian junto con Zurg para gestión y automatización de servicios.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NXy_nc-cHrecaS4vdwbRcQ.png",
      tags: ["Debian", "Linux", "Zurg", "DevOps", "Docker"],
      category: "articles",
      demoLink: "https://medium.com/@borisvargas/instalaci%C3%B3n-debian-zurg-abbe3d608cf3",
      githubLink: "https://github.com/borispacex",
      details: "Tutorial paso a paso para la instalación de Debian y la configuración de Zurg, orientado a entornos de automatización y despliegue. Incluye preparación del sistema, instalación de dependencias y puesta en marcha de servicios.",
      features: [
        "Instalación limpia de Debian",
        "Configuración inicial del sistema",
        "Instalación y configuración de Zurg",
        "Automatización de servicios",
        "Optimización para entornos productivos"
      ]
    },
    {
      id: 2,
      title: "Google Cloud Compute Engine + NIC-BO",
      description: "Implementación y configuración de instancias en Google Cloud con manejo avanzado de interfaces de red (NIC) en entornos VPC.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*-lPpk2pin6HSJBoexy05pA.jpeg",
      tags: ["Google Cloud", "Compute Engine", "Networking", "VPC", "DevOps"],
      category: "articles",
      demoLink: "https://medium.com/@borispacex/google-cloud-compute-engine-y-nic-bo-79d8e0a3aad9",
      githubLink: "https://github.com/borispacex",
      details: "Guía práctica para la creación y configuración de máquinas virtuales en Google Cloud Compute Engine, incluyendo la gestión de interfaces de red (NIC), configuración de VPC y segmentación de tráfico. Orientado a escenarios reales de infraestructura cloud y networking.",
      features: [
        "Creación de instancias en Compute Engine",
        "Configuración de redes VPC",
        "Gestión de interfaces de red (NIC)",
        "Segmentación de tráfico entre redes",
        "Optimización de rendimiento de red en la nube"
      ]
    },
    // {
    //   id: 3,
    //   title: "Chat application",
    //   description: "A chat-application with nextjs application.",
    //   image: "https://blog.happyfox.com/wp-content/uploads/2019/05/in-app-chat-blog-cover-image.png",
    //   tags: ["nextjs", "antd", "socket", "clerk"],
    //   category: "api",
    //   demoLink: "https://github.com/alawoddin/chat-application",
    //   githubLink: "https://github.com/alawoddin/chat-application",
    //   details: "A  user interface design for a user and userinterface application. The design focuses on creating a peaceful environment that encourages relaxation and focus.",
    //   features: [
    //     "Calming color palette and visual elements",
    //     "Intuitive meditation timer and tracker",
    //     "Custom illustrations and iconography",
    //     "Smooth transitions and micro-interactions",
    //     "Audio visualization components"
    //   ]
    // },
    {
      id: 4,
      title: "Hooks App React",
      description: "Aplicación desarrollada en React enfocada en el uso de Hooks para manejo de estado, efectos y lógica reutilizable.",
      image: "https://raw.githubusercontent.com/borispacex/hooks-app-react/refs/heads/main/public/images.png",
      tags: ["React", "Hooks", "TypeScript", "Frontend", "Vite"],
      category: "web",
      demoLink: "https://borispacex.github.io/hooks-app-react/",
      githubLink: "https://github.com/borispacex/hooks-app-react",
      details: "Proyecto práctico en React que implementa diferentes Hooks como useState, useEffect y hooks personalizados para gestionar el estado y los efectos secundarios de la aplicación. Orientado a comprender buenas prácticas en desarrollo frontend moderno.",
      features: [
        "Uso de useState para manejo de estado",
        "Implementación de useEffect para efectos secundarios",
        "Creación de hooks personalizados reutilizables",
        "Componentes funcionales modernos",
        "Arquitectura modular en React"
      ]
    },
    // {
    //   id: 5,
    //   title: "spring",
    //   description: "A laravel-react for Signal Page application.",
    //   image: "https://webprogrammer.io/wp-content/uploads/2022/04/install-react-laravel-header.webp",
    //   tags: ["laravel", "mysql", "Tailwind", "react"],
    //   category: "api",
    //   demoLink: "https://github.com/alawoddin/laravel-react",
    //   githubLink: "https://github.com/alawoddin/laravel-react",
    //   details: "in this project the admin add the data in backend the restful api is show to frontend The design focuses on creating a peaceful environment that encourages relaxation and focus.",
    //   features: [
    //     "Calming color palette and visual elements",
    //     "Intuitive meditation timer and tracker",
    //     "Custom illustrations and iconography",
    //     "Smooth transitions and micro-interactions",
    //     "Audio visualization components"
    //   ]
    // },
  ];

  const filteredProjects = filter === 'all'
      ? projects
      : projects.filter(project => project.category === filter);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <SectionHeading 
          title="Mis proyectos"
          subtitle="Trabajos recientes que he creado"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="card overflow-hidden group"
                variants={itemVariants}
                exit="exit"
                layout
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-48 -mx-6 -mt-6 mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex space-x-3">
                      <a 
                        href={project.demoLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label="Mas detalles"
                    >
                      <Maximize size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                >
                  <span>Más detalles</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;