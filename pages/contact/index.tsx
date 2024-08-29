import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Contact } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '@/src/shared/constants';

const KontaktPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('contact', locale || 'en');
  const description = getSeoDescription('contact', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${locale !== 'en' ? locale : ''}/contact/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/contact` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/kontakt/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/kontakt/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/kontakt/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/kontakt/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/kontakt/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/contact/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/contact/`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/naitec-og-logo.jpg',
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
        <Contact />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  console.log('fuuuck', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'common'])),
      locale,
    },
  };
};

export default KontaktPage;
