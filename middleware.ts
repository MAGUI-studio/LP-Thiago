import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except API routes, static assets, etc.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
