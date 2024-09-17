import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FireplaceDifusser } from '@/src/pages';
import { BASE_URL } from '@/src/shared/constants';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { useRouter } from 'next-translate-routes';

const pathsByLocale = {
  en: 'fireplace-diffuser',
  sk: 'krbovy-difuzor',
  cs: 'krbovy-difuzor',
  hu: 'kandalo-diffuzor',
  pl: 'difuzor-kominkowy',
  de: 'kamin-diffusor',
  ja: 'fireplace-diffuser',
};

const FireplaceDifusserPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('fireplace_diffuser', locale || 'en');
  const description = getSeoDescription('fireplace_diffuser', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'fireplace-diffuser';

  const languageAlternates = Object.keys(pathsByLocale).map((lang) => ({
    hrefLang: lang,
    href: `${BASE_URL}${lang !== 'en' ? `/${lang}` : ''}/${
      pathsByLocale[lang as keyof typeof pathsByLocale]
    }`,
  }));

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
              url: 'https://naitec.b-cdn.net/fireplace-support.png',
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
        <FireplaceDifusser />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['fireplace', 'common'])),
    },
  };
};

export default FireplaceDifusserPage;
