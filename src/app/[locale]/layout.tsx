import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/dictionaries';
import DictionaryProvider from '@/components/DictionaryProvider';

// Lista de idiomas soportados
const locales = ['es', 'en', 'pt'];

// Layout específico para cada idioma
// Este layout se ejecuta para cada ruta localizada (/es, /en, /pt)
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // En Next.js 15, params debe ser awaited
  const { locale } = await params;
  
  // Verificar que el idioma solicitado está soportado
  if (!locales.includes(locale)) {
    notFound();
  }

  // Obtener las traducciones para el idioma actual
  const dictionary = await getDictionary(locale);

  return (
    // Proveedor de diccionario que hace disponibles las traducciones
    // a todos los componentes hijos
    <DictionaryProvider dictionary={dictionary}>
      {children}
    </DictionaryProvider>
  );
}