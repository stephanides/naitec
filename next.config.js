const { i18n } = require('./next-i18next.config');
const withTranslateRoutes = require('next-translate-routes/plugin');

module.exports = withTranslateRoutes({
  i18n,
  env: {
    NEXT_PUBLIC_MAP_API_KEY: process.env.MAP_API_KEY,
    NEXT_PUBLIC_API_TOKEN: process.env.API_TOKEN,
    NEXT_PUBLIC_EMAIL_HOST: process.env.EMAIL_HOST,
    NEXT_PUBLIC_EMAIL_LOGIN: process.env.EMAIL_LOGIN,
    NEXT_PUBLIC_EMAIL_PASS: process.env.EMAIL_PASS,
    NEXT_PUBLIC_CONTACT_EMAIL_RECIPIENT: process.env.CONTACT_EMAIL_RECIPIENT,
  },
  images: {
    domains: ['naitec.b-cdn.net'], // Add the external domain here
  },
});
