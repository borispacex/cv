import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

type Category = 'all' | 'language' | 'frameworks' | 'libraries' | 'tools';
type Skill = {
  name: string;
  level: number;
};
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
      { name: 'C#, AspNet, .Net Core', level: 75 },
      { name: 'Java', level: 95 },
      { name: 'Python', level: 50 },
      { name: 'TypeScript', level: 50 },
      { name: 'SQL', level: 90 },
    ],
    frameworks: [
      { name: 'React', level: 92 },
      { name: 'Angular', level: 85 },
      { name: 'SpringBoot', level: 65 },
      { name: 'Quarkus', level: 60 },
      { name: 'Flutter', level: 40 },
    ],
    libraries: [
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind', level: 75 },
    ],
    tools: [
      { name: 'Git', level: 88 },
      { name: 'Chrome DevTools', level: 90 },
      { name: 'Docker', level: 88 },
      { name: 'Jenkins', level: 90 },
      { name: 'SQLServer y Oracle y PostgreSQL', level: 75 },
      { name: 'AWS, GoogleCloud y DigitalOcean', level: 70 },
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
        
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentSkills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
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