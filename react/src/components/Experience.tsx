import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import {ExperienceItem} from "../interfaces/experience.type.ts";

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Ministerio de Gobierno",
      position: "Técnico I – Desarrollo de Sistemas",
      duration: "26-09-2025 a 31-12-2025",
      description: "Desarrollo Full Stack con Angular 17, NG-Prime, TypeScript y NestJS sobre PostgreSQL. Implementé portales institucionales y sistemas de alerta temprana para seguridad nacional.",
      achievements: [
        "Diseño e implementación de dashboards de alertas tempranas",
        "Integración de portales web institucionales con Drupal y servicios backend",
        "Coordinación con entidades públicas para despliegues y entregas",
        "Optimización de consultas y visualización de datos en PostgreSQL"
      ],
      technologies: [
          "Microservicios",
          "PostgreSQL",
          "Drupal",
          "Metabase",
          "NextCloud",
          "TypeScript",
          "NestJS",
          "Docker",
          "GitLab",
          "Angular 18"
      ]
    },
    {
      company: "Digital Harbor Bolivia",
      position: "Software Developer | Mid Level",
      duration: "05-06-2025 a 01-09-2025",
      description: "Desarrollo backend con Java 17, Spring Boot y Python Django en proyectos que integran APIs REST, Elasticsearch y mensajería con Kafka.",
      achievements: [
        "Creación de microservicios para procesamiento y búsqueda de datos",
        "Automatización de pipelines de despliegue con Jenkins y Docker",
        "Desarrollo de APIs REST y SOAP con SQL Server y PostgreSQL",
        "Colaboración en soluciones de social text orientadas a cliente"
      ],
      technologies: [
          "Microservicios",
          "SQL Server",
          "Spring Cloud",
          "Kafka",
          "Elasticsearch",
          "Java 17",
          "Spring Boot",
          "Docker",
          "Jenkins",
          "Angular 12"
      ]
    },
    {
      company: "Banco Unión S.A.",
      position: "Programador Proyecto CORE",
      duration: "22-06-2023 a 04-06-2025",
      description: "Participé en el desarrollo del nuevo core bancario usando Java, Quarkus, Angular y Oracle. Implementé microservicios y apoyé la transición hacia arquitecturas modernas.",
      achievements: [
        "Desarrollo de módulos de API Gateway y servicios de acceso",
        "Migración y soporte de procesos bancarios a microservicios Docker",
        "Capacitación de personal y proveedores en la plataforma UNICORE",
        "Entrega exitosa de pases a producción bajo metodología Scrum"
      ],
      technologies: [
        "API Gateway",
        "Microservicios",
        "Angular",
        "Oracle",
        "PL/SQL",
        "Kubernetes",
        "Java 17",
        "Quarkus",
        "Jenkins",
        "Vue"
      ]
    },
    {
      company: "Banco Solidario S.A.",
      position: "Analista de Sistemas",
      duration: "01-02-2023 a 04-05-2023",
      description: "Soporte y desarrollo en sistemas bancarios y facturación electrónica. Realicé pruebas de servicios web y coordiné pases a producción con SQL Server y .NET Core.",
      achievements: [
        "Ejecución de pruebas de rendimiento con JMeter",
        "Gestión de mesas de ayuda para incidentes y consultas técnicas",
        "Soporte en integración de facturación electrónica y servicios web",
        "Colaboración en despliegues y mejoras en el Core bancario"
      ],
      technologies: [
        "JMeter",
        "Windows IIS",
        "SQL Server",
        "Bantotal",
        "Microsoft Teams",
        ".NET",
        "GeneXus",
        "Docker",
        "Transact-SQL (TSQL)"
      ]
    },
    {
      company: "DazaSoftware S.A.",
      position: "Desarrollador Full Stack",
      duration: "01-02-2021 a 31-12-2022",
      description: "Desarrollo de soluciones fintech con Java, Oracle PL/SQL, JDeveloper, Oracle Forms y Flutter. Trabajé en sistemas de administración de activos, fondos de inversión y pagos interbancarios.",
      achievements: [
        "Implementación de sistemas financieros para gestión de activos y fondos",
        "Desarrollo móvil y web con Flutter y Java",
        "Soporte técnico y comunicación con clientes del sector financiero",
        "Aplicación de prácticas ágiles en proyectos de ciclo completo"
      ],
      technologies: [
        "JDeveloper",
        "IIS",
        "Jasper Reports",
        "SQL Developer",
        "Java",
        "TypeScript",
        "Docker",
        "PHP"
      ]
    },
    {
      company: "Universidad Mayor de San Andrés",
      position: "Auxiliar de Docencia",
      duration: "01-02-2020 a 31-12-2020",
      description: "Impartí clases teórico-prácticas de redes de computadores, orientando a estudiantes en diseño de redes, protocolos y herramientas de simulación.",
      achievements: [
        "Preparación de contenido para redes LAN, TCP/IP y servicios de red",
        "Guía práctica en capas OSI y comunicación entre dispositivos",
        "Entrenamiento en Packet Tracer y configuración de redes",
        "Apoyo directo a estudiantes en actividades de laboratorio"
      ],
      technologies: [
        "Git",
        "Nginx",
        "Apache",
        "Bind9",
        "Postfix",
        "Packet Tracer",
        "Java",
        "JavaScript",
        "Python",
        "Linux"
      ]
    },
    {
      company: "Instituto de Ecología, UMSA",
      position: "Pasante",
      duration: "15-08-2019 a 13-12-2019",
      description: "Desarrollé un sistema web de seguimiento y control de proyectos de investigación para docentes e investigadores del instituto.",
      achievements: [
        "Creación de la aplicación para seguimiento de proyectos de investigación",
        "Optimización de la gestión de información en el instituto",
        "Implementación de una interfaz intuitiva para usuarios académicos"
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "Node.js",
        "Sequelize",
        "Angular 9+",
        "Bootstrap 4"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
      <section id="experience" className="section scroll-mt-24">
        <div className="container-custom">
          <SectionHeading
              title="Experiencia laboral"
              subtitle="Mi trayectoria profesional"
          />

          <motion.div
              className="relative mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline center line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2" />

            {experiences.map((experience, index) => (
              <motion.div
                key={`experience-${experience.company}`}
                    className={`relative flex flex-col md:flex-row ${
                        index !== experiences.length - 1 ? 'mb-12' : ''
                    }`}
                    variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 z-10 w-5 h-5 transform border-4 border-white rounded-full md:left-1/2 bg-primary-500 dark:border-gray-900 md:-translate-x-1/2" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${
                      index % 2 === 0
                          ? 'md:pr-12 md:text-right'
                          : 'md:pl-12 md:ml-auto'
                  }`}>

                    <motion.div
                        className="p-5 card md:p-6"
                        whileHover={{ y: -5 }}
                    >

                      {/* Header */}
                      <div className={`flex items-center gap-2 mb-1 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <Briefcase size={16} className="text-primary-500" />
                        <h3 className="text-lg font-bold">
                          {experience.company}
                        </h3>
                      </div>

                      <h4 className={`text-sm font-semibold text-gray-700 dark:text-gray-300 ${
                          index % 2 === 0 ? 'md:text-right' : ''
                      }`}>
                        {experience.position}
                      </h4>

                      <div className={`flex items-center gap-1 text-gray-500 mb-3 text-xs ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <Calendar size={12} />
                        <span>{experience.duration}</span>
                      </div>

                      {/* Description */}
                      <p className={`text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${
                          index % 2 === 0 ? 'md:text-right' : ''
                      }`}>
                        {experience.description}
                      </p>

                      {/* Content */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        {/* Achievements */}
                        <div>
                          <h4 className={`text-sm font-semibold mb-2 ${
                              index % 2 === 0 ? 'md:text-right' : ''
                          }`}>
                            Contenido
                          </h4>

                          <div className={`flex flex-wrap gap-2 ${
                              index % 2 === 0 ? 'md:justify-end' : ''
                          }`}>
                            {experience.achievements.map((item) => (
                              <span
                                key={`achievement-${item}`}
                                    className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-300"
                                >
        {item}
      </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className={`text-sm font-semibold mb-2 ${
                              index % 2 === 0 ? 'md:text-right' : ''
                          }`}>
                            Tecnologías
                          </h4>

                          <div className={`flex flex-wrap gap-2 ${
                              index % 2 === 0 ? 'md:justify-end' : ''
                          }`}>
                            {experience.technologies.map((tech) => (
                              <span
                                key={`tech-${tech}`}
                                    className="px-2 py-1 text-xs rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400"
                                >
                        {tech}
                      </span>
                            ))}
                          </div>
                        </div>

                      </div>

                    </motion.div>

                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Experience;