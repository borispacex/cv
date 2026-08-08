import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, CheckCircle2, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import {ExperienceItem} from "../interfaces/experience.type.ts";

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Ministerio de Gobierno",
      position: "Técnico I – Desarrollo de Sistemas",
      duration: "Sep 2025 — Dic 2025",
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
      duration: "Jun 2025 — Sep 2025",
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
      duration: "Jun 2023 — Jun 2025",
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
      duration: "Feb 2023 — May 2023",
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
      duration: "Feb 2021 — Dic 2022",
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
      duration: "Feb 2020 — Dic 2020",
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
      duration: "Ago 2019 — Dic 2019",
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
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 }
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
              className="relative mx-auto mt-10 max-w-5xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
          >
            <div
              className="absolute bottom-3 left-[0.4375rem] top-3 w-px bg-gradient-to-b from-primary-500 via-primary-300 to-gray-200 dark:via-primary-800 dark:to-gray-800 sm:left-[0.6875rem]"
              aria-hidden="true"
            />

            {experiences.map((experience, index) => (
              <motion.div
                key={`experience-${experience.company}`}
                    className={`relative pl-8 sm:pl-12 ${
                        index !== experiences.length - 1 ? 'mb-6' : ''
                    }`}
                    variants={itemVariants}
                >
                  <div
                    className="absolute left-0 top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 ring-4 ring-white dark:ring-gray-950 sm:h-6 sm:w-6"
                    aria-hidden="true"
                  >
                    <Briefcase className="hidden text-white sm:block" size={12} />
                  </div>

                  <motion.article
                      className="card border border-gray-100 p-5 dark:border-gray-800 md:p-6"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                  >
                    <header className="mb-4 border-b border-gray-100 pb-4 dark:border-gray-800">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="mb-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
                            {experience.company}
                          </p>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.position}
                          </h3>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                          <CalendarDays size={15} aria-hidden="true" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </header>

                    <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                        {experience.description}
                    </p>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-8">
                      <div className="lg:col-span-3">
                          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                            <CheckCircle2 size={16} className="text-primary-500" aria-hidden="true" />
                            Logros principales
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement) => (
                              <li
                                key={`achievement-${achievement}`}
                                className="flex items-start gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                      </div>

                      <div className="lg:col-span-2">
                          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                            <Code2 size={16} className="text-primary-500" aria-hidden="true" />
                            Tecnologías
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={`tech-${tech}`}
                                className="rounded-full border border-primary-200 bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 dark:border-primary-900 dark:bg-primary-950/50 dark:text-primary-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default Experience;
