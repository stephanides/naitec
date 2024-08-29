import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Onyx } from '@/src/pages';
import { BASE_URL } from '@/src/shared/constants';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';

const OnyxPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('onyx', locale || 'en');
  const description = getSeoDescription('onyx', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${locale !== 'en' ? locale : ''}/onyx/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/onyx` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/onyx/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/onyx/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/onyx/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/onyx/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/onyx/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/onyx/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/onyx/`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/onyx-support.png',
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
        <Onyx />
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'onyx'])),
    },
  };
};

export default OnyxPage;
