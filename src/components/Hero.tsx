'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

// Componente Hero Section
// Sección principal que transmite empoderamiento femenino y urgencia
export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-purple-800 text-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge de exclusividad */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              {t('hero.urgency')}
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtítulo */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-pink-200 mb-6 font-light"
            >
              {t('hero.subtitle')}
            </motion.h2>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.description')}
            </motion.p>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                {t('hero.cta')}
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Estadísticas y elementos visuales */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="relative"
          >
            {/* Tarjetas de estadísticas */}
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              >
                <Users className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{t('hero.stats.clients')}</div>
                <div className="text-pink-200 text-sm">Confiaron en nosotras</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              >
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{t('hero.stats.success')}</div>
                <div className="text-green-200 text-sm">Tasa de éxito</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
              >
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{t('hero.stats.growth')}</div>
                <div className="text-yellow-200 text-sm">Crecimiento promedio</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}