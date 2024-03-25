import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Add locales you want in the app
  locales: ['en', 'de', 'pl'],

  // default locale if no match
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en|pl)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
