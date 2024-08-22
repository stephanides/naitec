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
      },
      {
        source: '/kapcsolat',
        destination: '/contact',
      },
      {
        source: '/podpora',
        destination: '/support',
      },
      {
        source: '/wsparcie',
        destination: '/support',
      },
      {
        source: '/rolunk',
        destination: '/support',
      },
      {
        source: '/krbovy-difuzor',
        destination: '/fireplace-diffuser',
      },
      {
        source: '/kamin-difuzor',
        destination: '/fireplace-diffuser',
      },
      { source: '/dyfuzor-kominkowy', destination: '/fireplace-diffuser' },
      { source: '/kandallo-difuzor', destination: '/fireplace-diffuser' },
    ];
  },
  async headers() {
    return [
      {
        source: '/locales/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ];
  },
};
