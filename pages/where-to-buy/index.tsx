import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WhereToBuy } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '@/src/shared/constants';

const WhereToBuyPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('where_to_buy', locale || 'en');
  const description = getSeoDescription('where_to_buy', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${locale !== 'en' ? locale : ''}/where-to-buy/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/where-to-buy` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/kde-kupit/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/kde-koupit/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/hol-lehet-megvenni/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/gdzie-kupic/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/wo-kaufen/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/where-to-buy/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/where-to-buy/`,
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
        <WhereToBuy />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'wheretobuy',
        'common',
        'contact',
      ])),
    },
  };
};

export default WhereToBuyPage;
