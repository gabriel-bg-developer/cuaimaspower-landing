'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Mail, 
  Globe, 
  ShoppingCart, 
  Star, 
  ArrowRight,
  Check,
  Crown
} from 'lucide-react';

// Componente de Servicios
// Muestra los servicios de marketing digital y desarrollo web
// Destaca las mentorías como servicio estrella
export default function Services() {
  const t = useTranslations();

  const services = [
    {
      id: 'marketing',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600'
    },
    {
      id: 'development',
      icon: Globe,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600'
    },
    {
      id: 'mentoring',
      icon: Crown,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-300',
      textColor: 'text-yellow-600',
      isPopular: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Servicios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t(`services.${service.id}`);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                {/* Badge para servicio popular */}
                {service.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      {serviceData.badge}
                    </div>
                  </div>
                )}

                {/* Icono */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {serviceData.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {serviceData.description}
                </p>

                {/* Características */}
                <ul className="space-y-3 mb-8">
                  {serviceData.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 ${service.textColor} mt-0.5 mr-3 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full group bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}>
                  {service.isPopular ? 'Agendar Mentoría' : 'Más Información'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-800 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Lista para Transformar tu Negocio?
            </h3>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Únete a más de 500 mujeres emprendedoras que ya han transformado sus negocios con nosotras
            </p>
            <button className="bg-white text-purple-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl">
              Comenzar Mi Transformación
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}