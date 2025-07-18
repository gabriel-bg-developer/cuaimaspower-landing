// Sistema de diccionarios para internacionalización
// Importa los archivos JSON de traducciones

import es from '../../messages/es.json';
import en from '../../messages/en.json';
import pt from '../../messages/pt.json';

// Tipo para el diccionario basado en el archivo español
export type Dictionary = typeof es;

// Mapa de diccionarios por locale
const dictionaries = {
  es: () => es,
  en: () => en,
  pt: () => pt,
};

// Función para obtener el diccionario según el locale
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Validar que el locale existe
  if (!(locale in dictionaries)) {
    throw new Error(`Locale "${locale}" not found`);
  }
  
  return dictionaries[locale as keyof typeof dictionaries]();
};