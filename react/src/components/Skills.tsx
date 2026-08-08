import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {Category, Skill} from "../interfaces/skill.type.ts";

type Skills = Record<Exclude<Category, 'all'>, Skill[]>;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: {id: Category; name: string}[] = [
    { id: 'all', name: 'Todos' },
    { id: 'language', name: 'Lenguajes' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'libraries', name: 'Bibliotecas' },
    { id: 'tools', name: 'Herramientas' },
  ];
  
  const skills: Skills = {

     language: [
      { name: 'Java', level: 95 },
      { name: 'C#', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 60 },
      { name: 'SQL', level: 90 },
    ],
    frameworks: [
      { name: 'React', level: 92 },
      { name: 'Angular', level: 85 },
      { name: 'Spring Boot', level: 75 },
      { name: 'Quarkus', level: 70 },
      { name: 'Django', level: 60 },
    ],
    libraries: [
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind', level: 75 },
      { name: 'NG-Prime', level: 70 },
    ],
    tools: [
      { name: 'Git', level: 88 },
      { name: 'Docker', level: 88 },
      { name: 'Jenkins', level: 90 },
      { name: 'Kubernetes', level: 70 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'SQL Server', level: 85 },
      { name: 'Oracle', level: 80 },
      { name: 'AWS / GCP', level: 70 },
      { name: 'Linux', level: 80 },
    ],
  };

  const allSkills: Skill[] = Object.values(skills).flat();

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
    }
  };

  const currentSkills: Skill[] =
      activeCategory === 'all'
          ? allSkills
          : skills[activeCategory];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeading 
          title="Mis habilidades"
          subtitle="Tecnologías que he dominado"
        />
        
        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <motion.button
                key={`category-${category.id}`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            key={`skills-list-${activeCategory}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentSkills.map((skill, index) => (
              <motion.div 
                key={`skill-${skill.name}`}
                className="card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;