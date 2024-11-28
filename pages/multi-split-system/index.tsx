import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BASE_URL } from '@/src/shared/constants';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { useRouter } from 'next-translate-routes';
import { MultiSplitSystem } from '@/src/pages';

const pathsByLocale = {
  sk: 'multisplity',
  cs: 'multisplity',
  en: 'multi-split-system',
  hu: 'multi-split-rendszer',
  pl: 'klimatyzacja-multi-split',
  de: 'multi-split-klimaanlage',
  at: 'multi-split-klimaanlage',
  ja: 'multi-split-system',
};

const MultiSplitSystemPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('multi_split_system', locale || 'en');
  const description = getSeoDescription('multi_split_system', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'multi-split-system';

  const languageAlternates = Object.keys(pathsByLocale).map((lang) => ({
    hrefLang: lang,
    href: `${BASE_URL}${
      lang !== 'en' ? `/${lang === 'at' ? 'de' : lang}` : ''
    }/${pathsByLocale[lang as keyof typeof pathsByLocale]}`,
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
              url: 'https://naitec.b-cdn.net/support/multi-split-support.png',
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
        <MultiSplitSystem />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['multisplit', 'common'])),
    },
  };
};

export default MultiSplitSystemPage;
