import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import {Project} from "../interfaces/project.type.ts";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 500 } }
  };

  // Close modal when clicking escape key
  React.useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={`background-modal`}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/60 p-4 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="project-modal w-full max-w-3xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded-xl bg-white shadow-2xl dark:bg-gray-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-modal-image h-64 w-full rounded-t-xl object-cover object-center sm:h-80"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Cerrar detalles del proyecto"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="project-modal-content p-6">
            <div className="project-modal-tags mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={`tag-${tag}`}
                  className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 id="project-modal-title" className="project-modal-title mb-3 text-2xl font-bold sm:text-3xl">{project.title}</h2>
            <p className="project-modal-description mb-6 text-gray-700 dark:text-gray-300">{project.details}</p>
            
            <div className="project-modal-features mb-6">
              <h3 className="text-lg font-semibold mb-3">Características principales</h3>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                      key={`feature-${feature}`}
                      className="flex items-start">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="project-modal-actions flex flex-wrap gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
              <a 
                href={project.demoLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} className="mr-2" />
                Demo
              </a>
              <a 
                href={project.githubLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github size={16} className="mr-2" />
                Codigo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
