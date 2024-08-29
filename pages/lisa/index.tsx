import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Lisa } from '@/src/pages';
import { BASE_URL } from '@/src/shared/constants';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';

const LisaVoiceControlPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('lisa', locale || 'en');
  const description = getSeoDescription('lisa', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${locale !== 'en' ? locale : ''}/lisa/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/lisa` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/lisa/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/lisa/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/lisa/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/lisa/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/lisa/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/lisa/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/lisa/`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/lisa-support.png',
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
        <Lisa />
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['lisa', 'common'])),
    },
  };
};

export default LisaVoiceControlPage;
