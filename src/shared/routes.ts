interface RouteTranslations {
  [key: string]: string;
}

interface Routes {
  [key: string]: RouteTranslations;
}

const routes: Routes = {
  '/kontakt': {
    en: '/contact',
    sk: '/kontakt',
    fr: '/contact',
    es: '/contacto',
  },
  // Add more routes and their translations
};

export default routes;
