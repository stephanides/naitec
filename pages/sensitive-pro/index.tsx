import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SensitivePro } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '@/src/shared/constants';

const SensitiveProPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('sensitive_pro', locale || 'en');
  const description = getSeoDescription('sensitive_pro', locale || 'en');
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}/${
          locale !== 'en' ? locale : ''
        }/sensitive-pro/`}
        languageAlternates={[
          { hrefLang: 'en', href: `${BASE_URL}/sensitive-pro` },
          { hrefLang: 'sk', href: `${BASE_URL}/sk/sensivity-pro/` },
          { hrefLang: 'cs', href: `${BASE_URL}/cs/sensivity-pro/` },
          { hrefLang: 'hu', href: `${BASE_URL}/hu/sensivity-pro/` },
          { hrefLang: 'pl', href: `${BASE_URL}/pl/sensivity-pro/` },
          { hrefLang: 'de', href: `${BASE_URL}/de/sensivity-pro/` },
          { hrefLang: 'ja', href: `${BASE_URL}/ja/sensivity-pro/` },
        ]}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/sensitive-pro/`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/sensitive-pro-support.png',
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
        <SensitivePro />
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'sensitivepro'])),
    },
  };
};

export default SensitiveProPage;
