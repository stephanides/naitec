/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['sk', 'cs', 'en', 'de', 'pl', 'ja', 'hu'],
    localeDetection: true,
  },
  ns: [
    'common',
    'contact',
    'fireplace',
    'homepage',
    'lisa',
    'onyx',
    'sensitive',
    'sensitive-pro',
    'smart',
    'stellair',
    'support',
  ],
};
