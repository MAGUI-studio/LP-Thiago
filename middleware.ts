import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pt', 'en', 'es'],
  
  // Used when no locale matches
  defaultLocale: 'pt',

  // Hide the locale prefix from the URL
  localePrefix: 'never'
});

export const config = {
  // Match all pathnames except API routes, static assets, etc.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
