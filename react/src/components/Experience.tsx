import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Ministerio de Gobierno",
      position: "Técnico I – Técnico en Desarrollo de Sistemas I",
      duration: "26-09-2025 a 31-12-2025",
      description: "DESARROLLO FULL STACK EN EN TECNOLOGIAS FRONTEND ANGULAR 17, NG-PRIME, TYPESCRIPT Y BACKEND NESTJS TYPESCRIPT POSTGRESQL Y CMS DRUPAL. PORTAL INSTITUCIONAL OBSCD, SISTEMA DE INFORMACION NACIONAL DE ALERTAS TEMPRANAS SOBRE DROGAS (SINATD), SISTEMA NACIONAL DE INFORMACION SOBRE SEGURIDAD ESTATAL (SNISE).",
      achievements: [
        "Alertas Tempranas",
        "Cordinar con Entidades",
        "Manejo Graficas (Dashboard)",
        "Despliegue de Aplicaciones",
        "Portales web"
      ],
      technologies: [
          "Microservicios",
          "PostgreSQL",
          "Drupal",
          "Metabase",
          "NextCloud",
          "Typescript",
          "NestJS",
          "Docker",
          "Gitlab",
          "Angular 18"
      ]
    },
    {
      company: "Digital Harbor Bolivia",
      position: "Software Developer | Mid Level",
      duration: "05-06-2025 a 01-09-2025",
      description: "DESARROLLO EN EL EQUIPO DE BACKEND CON TECNOLOGIAS JAVA 17 FRAMEWORK SPRINGBOOT ELASTICSEARCH, APIREST, SOAP, KAFKA, CACHE REDIS, WEBSOCKETS, GATEWAY, DISCOVERY Y TAMBIEN BACKEND CON TECNOLOGIAS PYTHON DJANGO CON BASES DE DATOS SQL SERVER Y POSTGRESQL SE PARTICIPO EN PROYECTOS DE SOCIAL TEXT.",
      achievements: [
        "Jira",
        "Automatización",
        "Manejo SqlServer, Mongo, Redis",
        "Servicios de outsourcing",
        "Innovación"
      ],
      technologies: [
          "Microservicios",
          "SqlServer",
          "SpringCloud",
          "Kafka",
          "ElasticSearch",
          "Java 17",
          "SpringBoot",
          "Docker",
          "Jenkins",
          "Angular 12"
      ]
    },
    {
      company: "Banco Union S.A.",
      position: "Programador Proyecto CORE",
      duration: "22-06-2023 a 04-06-2025",
      description: "DESARROLLO DEL NUEVO CORE BANCARIA EN LENGUAJES DE PROGRAMACION JAVA8, JAVA11, JAVA17, ANGULAR 2 Y BASE DE DATOS ORACLE, PL/SQL. TECNOLOGIAS ACTUALES MICROSERVICIOS CON CONTENEDORES DOCKER, JAVA-QUARKUS, VUE3-TYPESCRIPT Y BASE DE DATOS SQL SERVER, SERVIDOR WILDFLY. APLICANDO METODOLOGIA AGIL SCRUM CON PLANNER ASI CORDINANDO CON EL ARQUITECTO DE SOFTWARE. SE PARTICIPO EN PROYECTOS DE APIGATEWAY, PARAMETROS, ACCESOS, CAPTACIONES, CAJAS. COMO LOGRO MI PERSONA LOGRO CAPACITAR A PERSONAL DE ATENCION A CLIENTE EN PANDO, ASI CAPTURANDO CONVIVENCIA DE UNIBANCA Y UNICORE. TAMBIEN SE CAPACITO A EMPRESAS EXTERNAS A BANCOUNION QUE PROVEIAN MODULOS, CAPACITANDOLOS EN COMO MANEJAMOS LAS TECNOLOGIAS EN UNICORE.",
      achievements: [
        "Manejo de Scrum",
        "Pases a producción",
        "Manejo de bases de Datos Oracle",
        "Manejo de sistemas bancarios",
        "Soporte a sponsors"
      ],
      technologies: [
        "Apigateway",
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
      description: "APOYO CON MESAS DE AYUDA RESPECTO CON BASE DE DATOS SQL SERVER CON EL CORE BANTOTAL, SERVICIOS EN SQL SERVER – TSQL, SISTEMA DE FACTURACION ELECTRONICA, VU FRAUD, PRUEBAS RAFAGA DE SERVICIOS WEB Y ADEMAS DE PASES A PRODUCCION DE SISTEMAS. LENGUAJES DE PROGRAMACION JAVA, .NET CORE, GENEXUS, DESCARTES, JMETER. TODO APLICANDO LA METODOLOGIA AGIL KANBAN (PORTOFOLIOS).",
      achievements: [
        "Manejo de Kambas",
        "Pases a producción",
        "Manejo de bases de Datos SQL Server",
        "Manejo de sistemas contabilidad",
        "Soporte a clientes de la entidad"
      ],
      technologies: [
        "Pruebas con JMeter",
        "Microsoft",
        "Servidores Windows IIS",
        "Sistema Bantotal",
        "Teams",
        ".NET",
        "GeneXus",
        "Descartes",
        "Docker",
        "Transact-SQL (TSQL)"
      ]
    },
    {
      company: "DazaSoftware S.A.",
      position: "Desarrollador Full Stack",
      duration: "01-02-2021 a 31-12-2022",
      description: "EMPRESA DE TECNOLOGIA FINANCIERA, DESARROLLO DE SISTEMAS CON TECNOLOGIAS ORACLE PL/SQL POR LA SOLIDEZ, JAVA, JDEVELOPER, ORACLE FORMS, FLUTTER. PRODUCTOS MOVILES Y WEBS DESARROLLADOS: GAM - SOFTWARE PARA ADMINISTRACION DE ACTIVOS FINANCIEROS, DFM - SOFTWARE PARA LA ADMINISTRACION DE FONDOS DE INVERSION, ACH - SISTEMA CLIENTE PARA LA RED INTERBANCARIA.",
      achievements: [
        "Manejo de SCRUM",
        "Metodologias de seguridad",
        "Control de calidad en software",
        "Manejo de bases de Datos Oracle",
        "Manejo de sistemas financieros",
        "Soporte a clientes en software"
      ],
      technologies: [
        "JDeveloper",
        "Microsoft",
        "IIS",
        "Servidores windows",
        "Reportes Jasper",
        "SQL Developer",
        "Java",
        "Typescript",
        "Docker",
        "PHP"
      ]
    },
    {
      company: "Universidad Mayor de San Andres",
      position: "Auxiliar de Docencia",
      duration: "01-02-2020 a 31-12-2020",
      description: "FACILITAR Y BRINDAR LOS CONOCIMIENTOS TEÓRICO - PRÁCTICO SOBRE LOS CONCEPTOS Y FUNDAMENTOS DE LAS REDES DE COMPUTADORES PARA QUE EL ESTUDIANTE SEA CAPAZ DE UTILIZAR, DISEÑAR E IMPLANTAR DIFERENTES TIPOS DE REDES. EL CURSO ESTÁ DISEÑADO PARA PROPORCIONAR UN CLARO ENTENDIMIENTO SOBRE LOS COMPONENTES DE LAS REDES Y CÓMO ESTAS NOS PERMITEN COMPARTIR INFORMACIÓN Y COMUNICARNOS.",
      achievements: [
        "Introducción a las Redes",
        "Redes e Internet",
        "Improved mobile experience across all company products",
        "Capa de Aplicación y aplicaciones de red",
        "Capa de Transporte",
        "Capa de Red – Plano de datos",
        "Capa de Red – Plano de Control",
        "Capa de Enlace y redes LANs"
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
      company: "Instituto de Ecologia, UMSA",
      position: "Pasante",
      duration: "15-08-2019 a 13-12-2019",
      description: "DESARROLLO DEL SISTEMA WEB DE SEGUIMIENTO Y CONTROL DE PROYECTOS DE INVESTIGACIÓN, SE ENFOCA EN MEJORAR EL MECANISMO DE SEGUIMIENTO Y CONTROL DE LOS PROYECTOS DE INVESTIGACIÓN PARA DOCENTES INVESTIGADORES DEL INSTITUTO DE ECOLOGÍA.",
      achievements: [
        "Desarrollo de software",
        "Desarrollo de aplicaciones",
        "Desarrollo web"
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "PostgreSQL",
        "NodeJS",
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
    <section id="experience" className="section">
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
              key={index} 
              className={`relative flex flex-col md:flex-row ${
                index !== experiences.length - 1 ? 'mb-12' : ''
              }`}
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10" />
              
              {/* Content boxes with alternate layout */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <motion.div 
                  className="card"
                  whileHover={{ y: -5 }}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase size={18} className="text-primary-500" />
                    <h3 className="text-xl font-bold">{experience.company}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {experience.position}
                  </h4>
                  
                  <div className={`flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Contenido analítico
                      </h4>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                              <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                              <span>{achievement}</span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Tecnologías y lenguajes
                      </h4>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {experience.technologies.map((technology, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                              <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                              <span>{technology}</span>
                            </li>
                        ))}
                      </ul>
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