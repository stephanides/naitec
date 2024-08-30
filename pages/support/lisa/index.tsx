import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BASE_URL, PRODUCTS } from '@/src/shared/constants';
import { useRouter } from 'next/router';
import { SupportDetail } from '@/src/pages';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';

const SupportPage = () => {
  const { pathname, locale } = useRouter();
  const title = getSeoTitle('support', locale || 'en');
  const description = getSeoDescription('support', locale || 'en');
  const path = pathname;
  const parts = path.split('/');
  const productId = parts[2];
  const item = PRODUCTS.find((product) => product.id === productId);

  if (!item) {
    return <Layout>Not found</Layout>;
  }
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${locale !== 'en' ? locale : ''}/support/lisa/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/support/lisa/` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/podpora/lisa/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/podpora/lisa/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/tamogatas/lisa/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/wsparcie/lisa/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/unterstutzung/lisa/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/support/lisa/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/support/lisa/${locale !== 'en' ? locale : ''}`,
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
