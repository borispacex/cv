import { useState } from 'react';
import { motion } from 'framer-motion';
import { Braces, Cloud, Code2, Database, LayoutGrid, Library, Wrench } from 'lucide-react';
import { DiJava } from 'react-icons/di';
import {
  SiAngular,
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiPostgresql,
  SiPython,
  SiQuarkus,
  SiReact,
  SiSharp,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import SectionHeading from './SectionHeading';
import {Category, Skill} from "../interfaces/skill.type.ts";

type Skills = Record<Exclude<Category, 'all'>, Skill[]>;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
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

  const skillIcons: Record<string, { icon: React.ReactNode; color: string }> = {
    Java: { icon: <DiJava size={24} />, color: 'text-[#E76F00]' },
    'C#': { icon: <SiSharp size={21} />, color: 'text-[#512BD4]' },
    TypeScript: { icon: <SiTypescript size={21} />, color: 'text-[#3178C6]' },
    Python: { icon: <SiPython size={21} />, color: 'text-[#3776AB]' },
    SQL: { icon: <Database size={21} />, color: 'text-slate-600 dark:text-slate-300' },
    React: { icon: <SiReact size={21} />, color: 'text-[#61DAFB]' },
    Angular: { icon: <SiAngular size={21} />, color: 'text-[#DD0031]' },
    'Spring Boot': { icon: <SiSpringboot size={21} />, color: 'text-[#6DB33F]' },
    Quarkus: { icon: <SiQuarkus size={21} />, color: 'text-[#4695EB]' },
    Django: { icon: <SiDjango size={21} />, color: 'text-[#0C4B33] dark:text-[#44B78B]' },
    Bootstrap: { icon: <SiBootstrap size={21} />, color: 'text-[#7952B3]' },
    Tailwind: { icon: <SiTailwindcss size={21} />, color: 'text-[#06B6D4]' },
    'NG-Prime': { icon: <Braces size={21} />, color: 'text-[#2563EB]' },
    Git: { icon: <SiGit size={21} />, color: 'text-[#F05032]' },
    Docker: { icon: <SiDocker size={21} />, color: 'text-[#2496ED]' },
    Jenkins: { icon: <SiJenkins size={21} />, color: 'text-[#D24939]' },
    Kubernetes: { icon: <SiKubernetes size={21} />, color: 'text-[#326CE5]' },
    PostgreSQL: { icon: <SiPostgresql size={21} />, color: 'text-[#4169E1]' },
    'SQL Server': { icon: <Database size={21} />, color: 'text-[#CC2927]' },
    Oracle: { icon: <Database size={21} />, color: 'text-[#F80000]' },
    'AWS / GCP': { icon: <SiGooglecloud size={21} />, color: 'text-[#4285F4]' },
    Linux: { icon: <SiLinux size={21} />, color: 'text-[#FCC624]' },
  };

  const categories = [
    { id: 'all' as const, name: 'Todas', icon: LayoutGrid, count: allSkills.length },
    { id: 'language' as const, name: 'Lenguajes', icon: Code2, count: skills.language.length },
    { id: 'frameworks' as const, name: 'Frameworks', icon: Braces, count: skills.frameworks.length },
    { id: 'libraries' as const, name: 'Bibliotecas', icon: Library, count: skills.libraries.length },
    { id: 'tools' as const, name: 'Herramientas', icon: Wrench, count: skills.tools.length },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 }
    }
  };

  const currentSkills: Skill[] =
      activeCategory === 'all'
          ? allSkills
          : skills[activeCategory];

  const getLevelLabel = (level: number) => {
    if (level >= 85) return 'Avanzado';
    if (level >= 70) return 'Competente';
    return 'Intermedio';
  };

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeading 
          title="Mis habilidades"
          subtitle="Tecnologías y herramientas de mi stack profesional"
        />
        
        <div className="mt-8">
          <div
            className="mb-8 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filtrar habilidades por categoría"
          >
            {categories.map((category) => {
              const Icon = category.icon;

              return (
              <motion.button
                key={`category-${category.id}`}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all sm:px-4 ${
                  activeCategory === category.id
                    ? 'border-primary-500 bg-primary-500 text-white shadow-sm'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:text-primary-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-800 dark:hover:text-primary-400'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileTap={{ scale: 0.97 }}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{category.name}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                }`}>
                  {category.count}
                </span>
              </motion.button>
              );
            })}
          </div>
          
          <motion.div 
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            key={`skills-list-${activeCategory}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            role="tabpanel"
          >
            {currentSkills.map((skill, index) => (
              (() => {
                const skillIcon = skillIcons[skill.name] ?? {
                  icon: <Cloud size={21} />,
                  color: 'text-primary-600 dark:text-primary-400',
                };

                return (
              <motion.div 
                key={`skill-${skill.name}`}
                className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-primary-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-800"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 transition-transform group-hover:scale-110 dark:bg-gray-800 ${skillIcon.color}`}>
                      {skillIcon.icon}
                    </span>
                    <span className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {skill.name}
                    </span>
                  </div>
                </div>

                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    {getLevelLabel(skill.level)}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500" aria-hidden="true">
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"
                  role="progressbar"
                  aria-label={`Nivel de ${skill.name}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.level}
                >
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.7, delay: index * 0.035 }}
                  />
                </div>
              </motion.div>
                );
              })()
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
