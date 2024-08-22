const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    NEXT_PUBLIC_MAP_API_KEY: process.env.MAP_API_KEY,
    NEXT_PUBLIC_API_TOKEN: process.env.API_TOKEN,
  },
  async rewrites() {
    return [
      {
        source: '/kontakt',
        destination: '/contact',
        locale: false,
      },
      {
        source: '/kapcsolat',
        destination: '/contact',
        locale: false,
      },
      {
        source: '/podpora',
        destination: '/support',
        locale: false,
      },
      {
        source: '/wsparcie',
        destination: '/support',
        locale: false,
      },
      {
        source: '/rolunk',
        destination: '/support',
        locale: false,
      },
      {
        source: '/krbovy-difuzor',
        destination: '/fireplace-diffuser',
        locale: false,
      },
      {
        source: '/kamin-difuzor',
        destination: '/fireplace-diffuser',
        locale: false,
      },
      {
        source: '/dyfuzor-kominkowy',
        destination: '/fireplace-diffuser',
        locale: false,
      },
      {
        source: '/kandallo-difuzor',
        destination: '/fireplace-diffuser',
        locale: false,
      },
    ];
  },
};
