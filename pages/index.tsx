import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Home } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { BASE_URL } from '@/src/shared/constants';

const HomePage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('home', locale || 'en');
  const description = getSeoDescription('home', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${locale !== 'en' ? locale : ''}`}
        languageAlternates={[
          { hrefLang: 'en-US', href: `${BASE_URL}/` },
          { hrefLang: 'sk-SK', href: `${BASE_URL}/sk` },
          { hrefLang: 'cs-CZ', href: `${BASE_URL}/cs` },
          { hrefLang: 'hu-HU', href: `${BASE_URL}/hu` },
          { hrefLang: 'pl-PL', href: `${BASE_URL}/pl` },
          { hrefLang: 'de-DE', href: `${BASE_URL}/de` },
          { hrefLang: 'de-AT', href: `${BASE_URL}/de` },
          { hrefLang: 'ja-JP', href: `${BASE_URL}/ja` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/naitec-og-logo.jpg',
              width: 1200,
              height: 630,
              alt: 'Naitec',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Naitec',
        }}
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage', 'common'])),
    },
  };
};

export default HomePage;
