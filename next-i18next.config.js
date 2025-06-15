const path = require('path');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['sk', 'cs', 'en', 'de', 'pl', 'ja', 'hu', 'it'],
  },
  localePath: path.resolve('./public/locales'),
  ns: [
    'common',
    'contact',
    'fireplace',
    'homepage',
    'lisa',
    'onyx',
    'sensitive',
    'sensitivepro',
    'smart',
    'stellair',
    'support',
    'wheretobuy',
    'cassette',
    'ducted',
    'multisplit',
    'privacypolicy',
    'legalnotice',
  ],
};
