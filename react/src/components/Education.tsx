import React from 'react';
import { motion } from 'framer-motion';
import {Award, GraduationCap, School} from 'lucide-react';
import SectionHeading from './SectionHeading';

type EducationItem = {
	date: string;
	degree: string;
	institution: string;
	specialty: string;
	details: string;
};

const getIcon = (degree: string) => {
	if (degree.includes("Licenciatura")) return <GraduationCap size={20} />;
	if (degree.includes("Diplomatura")) return <Award size={20} />;
	if (degree.includes("Secundaria")) return <School size={20} />;

	return <GraduationCap size={20} />;
};

const educationData: EducationItem[] = [
	{
		date: 'Agosto 2024 - Enero 2025',
		degree: 'Diplomatura',
		institution: 'Postgrado, Instituto de Posgrado y Educación Continua (USFA)',
		specialty: 'Emprendimiento e innovación',
		details: 'Promedio 90',
	},
	{
		date: 'Febrero 2024 - Junio 2024',
		degree: 'Diplomatura',
		institution: 'Postgrado, Universidad para el Desarrollo y la Innovación (UDI)',
		specialty: 'Fundamentos en DevOps',
		details: 'Promedio 95',
	},
	{
		date: 'Noviembre 2023 - Mayo 2024',
		degree: 'Diplomatura',
		institution: 'Postgrado, Universidad del Valle (UNIVALLE)',
		specialty: 'Desarrollo y Administración de Sistemas Web Empresariales',
		details: 'Promedio 90',
	},
	{
		date: 'Marzo 2023 - Septiembre 2023',
		degree: 'Diplomatura',
		institution: 'Postgrado, Universidad del Valle (UNIVALLE)',
		specialty: 'Auditoría Informática',
		details: 'Promedio 85',
	},
	{
		date: '2015 - 2021',
		degree: 'Licenciatura',
		institution: 'Informática, Universidad Mayor de San Andrés (UMSA)',
		specialty: 'Ingeniería de Sistemas Informáticos',
		details: 'Promedio general 70.61',
	},
	{
		date: '2010 - 2013',
		degree: 'Secundaria',
		institution: 'Colegio La Salle, La Paz - Bolivia',
		specialty: 'Bachiller en Humanidades',
		details: 'Diploma de asistencia',
	},
];

const Education: React.FC = () => {
	return (
		<section id="education" className="py-16 bg-gray-50 dark:bg-gray-900/50 scroll-mt-24">
			<div className="container px-4 mx-auto">
				<SectionHeading
					title="Educación"
					subtitle="Formación académica"
				/>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{educationData.map((item, index) => (
						<motion.div
							key={`${index}-${item.date}`}
							className="card flex flex-col items-center text-center p-4"
							whileHover={{
								y: -5,
								boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
							}}
						>
							{/* ICONO IGUAL QUE STATS */}
							<div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-3">
								{getIcon(item.degree)}
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
							<div className="flex flex-wrap justify-center gap-2 mt-2">
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