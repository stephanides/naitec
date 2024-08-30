import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FireplaceDifusser } from '@/src/pages';
import { BASE_URL } from '@/src/shared/constants';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { useRouter } from 'next-translate-routes';

const FireplaceDifusserPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('fireplace_diffuser', locale || 'en');
  const description = getSeoDescription('fireplace_diffuser', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${
          locale !== 'en' ? locale : ''
        }/fireplace-diffuser/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/fireplace-diffuser` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/krbovy-difuzor/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/krbovy-difuzor/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/kandalo-diffuzor/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/difuzor-kominkowy/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/kamin-diffusor/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/fireplace-diffuser/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${
            locale !== 'en' ? locale : ''
          }fireplace-diffuser/`,
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
