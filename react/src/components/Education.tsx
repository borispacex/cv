
// Education.tsx - Componente de Educación con Tailwind
import React from 'react';
import SectionHeading from './SectionHeading';

type EducationItem = {
	date: string;
	degree: string;
	institution: string;
	specialty: string;
	details: string;
};

const educationData: EducationItem[] = [
	{
		date: 'Agosto 2024 - Enero 2025',
		degree: 'Diplomatura',
		institution: 'Instituto de Posgrado y Educación Continua (USFA)',
		specialty: 'Emprendimiento e innovación',
		details: 'Promedio 90',
	},
	{
		date: 'Febrero 2024 - Junio 2024',
		degree: 'Diplomatura',
		institution: 'Postgrado, Universidad para el Desarrollo y la Inovación (UDI)',
		specialty: 'Fundamentos en DevOps',
		details: 'Promedio 95',
	},
	{
		date: 'Noviembre 2023 - mayo 2024',
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
		institution: 'Informatica, Universidad Mayor de San Andres (UMSA)',
		specialty: 'Ingenieria de Sistemas Informaticos',
		details: 'Promedio general 70.61',
	},
	{
		date: '2010 - 2013',
		degree: 'Escuela secundaria',
		institution: 'Colegio La Salle, La Paz - Bolivia',
		specialty: 'Bachiller en Humanidades',
		details: 'Diploma de asistencia',
	},
];

const Education: React.FC = () => {
	return (
		<section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
			<div className="container px-4 mx-auto">
				<SectionHeading title="Educación" subtitle="Formación académica" />
				<div className="space-y-8">
					{educationData.map((item, idx) => (
						<div
							key={idx}
							className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg md:flex-row dark:bg-gray-800"
						>
							<div className="flex flex-col items-center justify-center p-6 text-white md:w-1/4 bg-primary-500">
								<p className="mb-2 text-sm font-medium">{item.date}</p>
								<div className="text-lg font-bold">{item.degree}</div>
							</div>
							<div className="p-6 md:w-3/4">
								<div className="mb-1 text-xl font-semibold">{item.institution}</div>
								<div className="mb-2 font-medium text-md text-primary-600 dark:text-primary-400">{item.specialty}</div>
								<ul className="ml-5 list-disc">
									<li>{item.details}</li>
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Education;
