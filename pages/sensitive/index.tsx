import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Sensitive } from '@/src/pages';
import { BASE_URL } from '@/src/shared/constants';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';

const SensitivePage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('sensitive', locale || 'en');
  const description = getSeoDescription('sensitive', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${locale !== 'en' ? locale : ''}/sensitive/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/sensitive` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/sensitive/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/sensitive/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/sensitive/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/sensitive/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/sensitive/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/sensitive/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/sensitive/`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/sensitive-support.png',
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
        <Sensitive />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'sensitive'])),
    },
  };
};

export default SensitivePage;
