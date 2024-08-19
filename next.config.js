const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
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
};
