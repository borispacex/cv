import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "borisvargaspaucara@gmail.com",
      link: "borisvargaspaucacara@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+591 60514138",
      link: "tel:+59160514138"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: " La Paz, Bolivia",
      link: "https://maps.app.goo.gl/ELoUUWX5beygVkr1A",
    }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Borrar error cuando el usuario comienza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Se requiere el nombre";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Se requiere Correo electrónico";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Formato de Correo electrónico no válido";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Se requiere el Asunto";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Se requiere Mensaje";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 }
    })
  };
  
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <SectionHeading 
          title="Ponte en contacto"
          subtitle="Iniciemos una conversación"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2`}
                    placeholder="Nombre"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Tu correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2`}
                    placeholder="correo@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2`}
                    placeholder="Consulta sobre el curriculum"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Tu mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                    } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2`}
                    placeholder="Cuéntame sobre tu consulta ..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  className={`btn btn-primary w-full py-3 flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Send size={18} className="mr-2" />
                  )}
                  {isSubmitting ? 'Envío ...' : 'Enviar mensaje'}
                </motion.button>
              </form>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Tu mensaje se ha enviado correctamente. ¡Te responderé pronto!
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Se produjo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="flex flex-col space-y-6">
            <motion.div
                className="mb-auto"
                variants={contactVariants}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
              <div className="card bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
                <h4 className="text-xl font-bold mb-3">Trabajemos juntos</h4>
                <p className="mb-4">
                  ¿Tienes algún proyecto en mente? Actualmente estoy disponible para trabajar.
                </p>
                <a
                    href="borisvargaspaucara@gmail.com"
                    className="inline-block px-6 py-2 bg-white text-primary-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Inicia una conversación
                </a>
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;