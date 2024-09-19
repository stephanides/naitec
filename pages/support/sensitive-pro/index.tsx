import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BASE_URL, PRODUCTS } from '@/src/shared/constants';
import { useRouter } from 'next/router';
import { SupportDetail } from '@/src/pages';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';

const pathsByLocale = {
  en: 'support/sensitive-pro',
  sk: 'podpora/sensitive-pro',
  cs: 'podpora/sensitive-pro',
  hu: 'tamogatas/sensitive-pro',
  pl: 'wsparcie/sensitive-pro',
  de: 'unterstutzung/sensitive-pro',
  at: 'unterstutzung/sensitive-pro',
  ja: 'support/sensitive-pro',
};

const SupportPage = () => {
  const { pathname, locale } = useRouter();
  const title = getSeoTitle('support', locale || 'en');
  const description = getSeoDescription('support', locale || 'en');
  const path = pathname;
  const parts = path.split('/');
  const productId = parts[2];
  const item = PRODUCTS.find((product) => product.id === productId);
  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] ||
    'support/sensitive-pro';

  const languageAlternates = Object.keys(pathsByLocale).map((lang) => ({
    hrefLang: lang,
    href: `${BASE_URL}${lang !== 'en' ? `/${lang === 'at' ? 'de' : lang}` : ''}/${
      pathsByLocale[lang as keyof typeof pathsByLocale]
    }`,
  }));

  if (!item) {
    return <Layout>Not found</Layout>;
  }
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}${
          locale !== 'en' ? `/${locale}` : ''
        }/${localizedPath}`}
        languageAlternates={languageAlternates}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/${localizedPath}`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/sensitive-pro-support.png',
              width: 1200,
              height: 630,
              alt: 'Naitec',
              type: 'image/png',
            },
          ],
          siteName: 'Naitec',
        }}
      />
      <Layout>
        <SupportDetail product={item} />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['support', 'common'])),
    },
  };
};

export default SupportPage;
