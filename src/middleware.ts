import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// Extiende el middleware de next-intl
const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: Request) {
  const response = intlMiddleware(request); // Procesa el middleware predeterminado

  const { pathname } = request.nextUrl;
  const hasLocale = routing.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!hasLocale) {
    // Detecta el idioma preferido del usuario
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLocale =
      acceptLanguage
        ?.split(',')
        .map((lang) => lang.split(';')[0])
        .find((lang) => routing.locales.includes(lang)) || routing.defaultLocale;

    // Redirige al idioma preferido
    const url = new URL(request.url);
    url.pathname = `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return response; // Retorna la respuesta procesada por next-intl
}

export const config = {
  // Coincide con rutas internacionalizadas
  matcher: ['/', '/(es|en)/:path*'],
};
