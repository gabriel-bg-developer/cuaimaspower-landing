'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { motion } from 'framer-motion';
import { Plan } from '@/types';
import { 
  Check, 
  Star, 
  Crown, 
  Heart, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Componente de Precios
// Muestra planes específicos para mujeres emprendedoras
export default function Pricing() {
  const t = useTranslations();

  const plans = [
    {
      id: 'starter',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      borderColor: 'border-pink-200',
      popular: false
    },
    {
      id: 'professional',
      icon: Crown,
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-300',
      popular: true
    },
    {
      id: 'enterprise',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-300',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Planes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan: Plan, index: number) => {
            const Icon = plan.icon;
            const planData = t(`pricing.${plan.id}`);
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white ${plan.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-purple-200 scale-105' : ''
                }`}
              >
                {/* Badge para plan popular */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Icono */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Título del plan */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {planData.name}
                </h3>

                {/* Precio */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${planData.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{planData.period}
                    </span>
                  </div>
                </div>

                {/* Características */}
                <ul className="space-y-4 mb-8">
                  {planData.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full group font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                  plan.popular 
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                    : `border-2 ${plan.borderColor} text-gray-900 hover:bg-gray-50`
                }`}>
                  {t('pricing.cta')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Check className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Garantía de Satisfacción
            </h3>
            <p className="text-gray-600">
              Si no estás completamente satisfecha con nuestros servicios en los primeros 30 días, 
              te devolvemos el 100% de tu inversión.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}