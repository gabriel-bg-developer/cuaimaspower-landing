'use client';

import { createContext, ReactNode } from 'react';
import { Dictionary } from '@/lib/dictionaries';

// Contexto para las traducciones
export const DictionaryContext = createContext<Dictionary | null>(null);

// Proveedor de diccionario que hace disponibles las traducciones
// a todos los componentes hijos
export default function DictionaryProvider({
  children,
  dictionary
}: {
  children: ReactNode;
  dictionary: Dictionary;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}