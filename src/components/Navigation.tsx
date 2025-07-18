'use client';

import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

// Componente de navegación principal
// Incluye logo elegante para CuaimasPower y navegación responsive
export default function Navigation() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo CuaimasPower */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Logo temporal elegante con fuente estilizada */}
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Cuaimas
                </span>
                <span className="text-gray-800">Power</span>
              </div>
              <div className="text-xs text-gray-500 font-medium mt-1">
                Empoderando Mujeres
              </div>
            </div>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-800 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('navigation.home')}
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('navigation.services')}
              </a>
              <a
                href="#pricing"
                className="text-gray-800 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('navigation.pricing')}
              </a>
              <a
                href="#testimonials"
                className="text-gray-800 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('navigation.testimonials')}
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('navigation.contact')}
              </a>
            </div>
          </div>

          {/* Selector de idioma y botón móvil */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {/* Botón CTA */}
            <button className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Consulta Gratuita
            </button>

            {/* Botón menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-purple-600 focus:outline-none focus:text-purple-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-50 rounded-md"
            >
              {t('navigation.home')}
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-50 rounded-md"
            >
              {t('navigation.services')}
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-50 rounded-md"
            >
              {t('navigation.pricing')}
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-50 rounded-md"
            >
              {t('navigation.testimonials')}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-purple-600 hover:bg-gray-50 rounded-md"
            >
              {t('navigation.contact')}
            </a>
            <div className="pt-3">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Consulta Gratuita
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}