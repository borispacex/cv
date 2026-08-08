import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import {EducationItem} from "../interfaces/education.type.ts";

const educationData: EducationItem[] = [
	{
		date: 'Agosto 2024 - Enero 2025',
		logo: `${import.meta.env.BASE_URL}image/education/usfa.webp`,
		degree: 'Diplomatura',
		institution: 'Postgrado, Instituto de Posgrado y Educación Continua (USFA)',
		specialty: 'Emprendimiento e innovación',
		details: 'Promedio 90',
	},
	{
		date: 'Febrero 2024 - Junio 2024',
		logo: `${import.meta.env.BASE_URL}image/education/udi.jpg`,
		degree: 'Diplomatura',
		institution: 'Postgrado, Universidad para el Desarrollo y la Innovación (UDI)',
		specialty: 'Fundamentos en DevOps',
		details: 'Promedio 95',
	},
	{
		date: 'Noviembre 2023 - Mayo 2024',
		logo: `${import.meta.env.BASE_URL}image/education/univalle.png`,
		degree: 'Diplomatura',
		institution: 'Postgrado, Universidad del Valle (UNIVALLE)',
		specialty: 'Desarrollo y Administración de Sistemas Web Empresariales',
		details: 'Promedio 90',
	},
	{
		date: 'Marzo 2023 - Septiembre 2023',
		logo: `${import.meta.env.BASE_URL}image/education/univalle.png`,
		degree: 'Diplomatura',
		institution: 'Postgrado, Universidad del Valle (UNIVALLE)',
		specialty: 'Auditoría Informática',
		details: 'Promedio 85',
	},
	{
		date: '2015 - 2021',
		logo: `${import.meta.env.BASE_URL}image/education/umsa.png`,
		degree: 'Licenciatura',
		institution: 'Informática, Universidad Mayor de San Andrés (UMSA)',
		specialty: 'Ingeniería de Sistemas Informáticos',
		details: 'Promedio general 70.61',
	},
	{
		date: '2010 - 2013',
		logo: `${import.meta.env.BASE_URL}image/education/la-salle.jpg`,
		degree: 'Secundaria',
		institution: 'Colegio La Salle, La Paz - Bolivia',
		specialty: 'Bachiller en Humanidades',
		details: 'Diploma de asistencia',
	},
];

const Education: React.FC = () => {
	return (
		<section id="education" className="section bg-gray-50 dark:bg-gray-900/50 scroll-mt-20 sm:scroll-mt-24">
			<div className="container-custom">
				<SectionHeading
					title="Educación"
					subtitle="Formación académica"
				/>

				<motion.div
					className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{educationData.map((item) => (
						<motion.div
							key={`education-${item.date}`}
							className="card flex h-full flex-col items-center p-4 text-center sm:p-5"
							whileHover={{
								y: -5,
								boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
							}}
						>
							<div className={`mb-3 flex h-12 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm dark:border-gray-700 dark:bg-gray-100 sm:h-14 ${
								item.institution.includes('La Salle') || item.institution.includes('USFA')
									? 'w-20 sm:w-24'
									: 'w-12 sm:w-14'
							}`}>
								<img
									src={item.logo}
									alt={`Logo de ${item.institution}`}
									className={`h-full w-full ${
										item.institution.includes('La Salle')
											? 'scale-110 object-cover object-[center_42%]'
											: 'object-contain'
									}`}
									loading="lazy"
								/>
							</div>

							{/* Fecha */}
							<span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
								{item.date}
							</span>

							{/* Institución */}
							<h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
								{item.institution}
							</h3>

							{/* Especialidad */}
							<span className="text-xs text-primary-600 dark:text-primary-400 mb-2">
								{item.specialty}
							</span>

							{/* Badges */}
							<div className="mt-auto flex flex-wrap justify-center gap-2 pt-2">
								<span className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
									{item.degree}
								</span>

								<span className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
									{item.details}
								</span>
							</div>

						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Education;
