import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WhereToBuy } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '@/src/shared/constants';

const pathsByLocale = {
  en: 'where-to-buy',
  sk: 'kde-kupit',
  cs: 'kde-koupit',
  hu: 'hol-lehet-megvenni',
  pl: 'gdzie-kupic',
  de: 'wo-kaufen',
  ja: 'where-to-buy',
};

const WhereToBuyPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('where_to_buy', locale || 'en');
  const description = getSeoDescription('where_to_buy', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'where-to-buy';

  const languageAlternates = Object.keys(pathsByLocale).map((lang) => ({
    hrefLang: lang,
    href: `${BASE_URL}${lang !== 'en' ? `/${lang}` : ''}/${
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
