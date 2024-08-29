import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Stellair } from '@/src/pages';
import { BASE_URL } from '@/src/shared/constants';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';

const StellairPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('stellair', locale || 'en');
  const description = getSeoDescription('stellair', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/stellair/${locale !== 'en' ? locale : ''}`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/stellair` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/stellair/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/stellair/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/stellair/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/stellair/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/stellair/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/stellair/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/stellair/`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/stellair-support.png',
              width: 1200,
              height: 630,
              alt: 'Naitec',
              type: 'image/png',
            },
          ],
          siteName: 'Naitec',
        }}
      />
      <Layout withOrnament>
        <Stellair />
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['stellair', 'common'])),
    },
  };
};

export default StellairPage;
