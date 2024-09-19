import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Smart } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '@/src/shared/constants';

const pathsByLocale = {
  en: 'smart',
  sk: 'smart',
  cs: 'smart',
  hu: 'smart',
  pl: 'smart',
  de: 'smart',
  at: 'smart',
  ja: 'smart',
};

const SmartPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('smart', locale || 'en');
  const description = getSeoDescription('smart', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'smart';

  const languageAlternates = Object.keys(pathsByLocale).map((lang) => ({
    hrefLang: lang,
    href: `${BASE_URL}${lang !== 'en' ? `/${lang === 'at' ? 'de' : lang}` : ''}/${
      pathsByLocale[lang as keyof typeof pathsByLocale]
    }`,
  }));

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${BASE_URL}${
          locale !== 'en' ? `/${locale}` : ''
        }/${localizedPath}`}
        languageAlternates={languageAlternates}
        openGraph={{
          url: `${BASE_URL}/${locale !== 'en' ? locale : ''}/${localizedPath}`,
          title: title,
          description: description,
          images: [
            {
              url: 'https://naitec.b-cdn.net/smart-support.png',
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
        <Smart />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'smart'])),
    },
  };
};

export default SmartPage;
