'use client';

import { useContext } from 'react';
import { DictionaryContext } from '@/components/DictionaryProvider';

// Hook personalizado para usar traducciones
// Reemplaza el useTranslations de next-intl con nuestro sistema personalizado
export function useTranslations() {
  const dictionary = useContext(DictionaryContext);
  
  if (!dictionary) {
    throw new Error('useTranslations must be used within a LocaleLayout');
  }
  
  // Función para obtener traducciones por ruta de objeto
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function t(key: string): any {
    const keys = key.split('.');
    let value: unknown = dictionary;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }
    
    return value;
  };
}