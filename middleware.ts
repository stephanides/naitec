import createMiddleware from 'next-intl/middleware';
import { locales } from './config'; // Your configured locales

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en', // Default locale
  localeDetection: false,
});

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'], // Regex to match all routes except Next.js specific paths
};
