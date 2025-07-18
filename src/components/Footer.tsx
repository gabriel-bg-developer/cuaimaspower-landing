'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// Componente Footer
// Pie de página con información de contacto y enlaces
export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cuaimas
                </span>
                <span className="text-white">Power</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.company')}
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-indigo-600 p-2 rounded-full hover:bg-indigo-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Precios</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">info@cuaimaspower.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Global - Servicio Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CuaimasPower. {t('footer.rights')}.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>

        {/* Mensaje especial */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Hecho con <Heart className="w-4 h-4 text-red-500 mx-1" /> para emprendedoras visionarias
          </p>
        </div>
      </div>
    </footer>
  );
}