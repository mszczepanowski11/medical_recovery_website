import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n';

export default createMiddleware({
  // Add locales you want in the app
  locales,

  // default locale if no match
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|pl)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
