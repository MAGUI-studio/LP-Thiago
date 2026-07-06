import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pt', 'en', 'es'],
  
  // Used when no locale matches
  defaultLocale: 'pt',

  // Hide the locale prefix from the URL
  localePrefix: 'never',

  // Localized pathnames mapping
  pathnames: {
    '/': '/',
    '/cursos': {
      pt: '/cursos',
      en: '/courses',
      es: '/cursos'
    },
    '/produtos': {
      pt: '/produtos',
      en: '/products',
      es: '/produtos'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
