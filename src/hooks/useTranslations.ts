'use client';

import { useContext } from 'react';
import { DictionaryContext } from '@/components/DictionaryProvider';
import { Dictionary } from '@/lib/dictionaries';

// Hook personalizado para usar traducciones
// Reemplaza el useTranslations de next-intl con nuestro sistema personalizado
export function useTranslations() {
  const dictionary = useContext(DictionaryContext);
  
  if (!dictionary) {
    throw new Error('useTranslations must be used within a LocaleLayout');
  }
  
  // Función para obtener traducciones por ruta de objeto
  return function t(key: string): any {
    const keys = key.split('.');
    let value: any = dictionary;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }
    
    return value;
  };
}