import { SEO_CONTENT } from './constants';

export const getSeoTitle = (page: string, locale: string) => {
  // @ts-ignore
  return SEO_CONTENT[page].title[locale] || SEO_CONTENT[page].title['en']; // Fallback to English if locale not found
};

export const getSeoDescription = (page: string, locale: string) => {
  return (
    // @ts-ignore
    SEO_CONTENT[page].description[locale] || SEO_CONTENT[page].description['en']
  ); // Fallback to English if locale not found
};
