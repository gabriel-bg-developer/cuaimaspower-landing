import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Idiomas soportados
const locales = ['es', 'en', 'pt'];
const defaultLocale = 'es';

// Función para obtener el locale preferido del usuario
function getLocale(request: NextRequest): string {
  // Obtener el idioma preferido del header Accept-Language
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Buscar si algún idioma preferido coincide con nuestros locales
    for (const locale of locales) {
      if (acceptLanguage.includes(locale)) {
        return locale;
      }
    }
  }
  
  // Si no encuentra coincidencia, usar el idioma por defecto
  return defaultLocale;
}

// Middleware para manejo de internacionalización
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Verificar si el pathname ya incluye un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si ya tiene locale, continuar normalmente
  if (pathnameHasLocale) return;

  // Si no tiene locale, redirigir con el locale apropiado
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Aplicar el middleware a todas las rutas excepto archivos estáticos y API
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};