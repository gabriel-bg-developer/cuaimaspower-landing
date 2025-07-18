'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';

// Componente selector de idioma
// Permite cambiar entre español, inglés y portugués
export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Extraer el locale actual del pathname
  const currentLocale = pathname.split('/')[1] || 'es';

  // Configuración de idiomas con sus respectivos nombres y banderas
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  // Función para cambiar idioma
  const changeLanguage = (newLocale: string) => {
    // Obtener la ruta actual sin el locale
    const pathnameWithoutLocale = pathname.startsWith(`/${currentLocale}`) 
      ? pathname.slice(currentLocale.length + 1) 
      : pathname;
    
    // Redirigir a la nueva ruta con el nuevo locale
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <span className="sm:hidden">
          {currentLanguage?.flag}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown de idiomas */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center space-x-3 ${
                  currentLocale === language.code 
                    ? 'bg-purple-50 text-purple-700' 
                    : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLocale === language.code && (
                  <span className="ml-auto text-purple-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay para cerrar dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}