import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Giveaway } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL, HREF_LANGS } from '@/src/shared/constants';

const pathsByLocale = {
  en: 'gewinnspiel-de',
  sk: 'gewinnspiel-de',
  cs: 'gewinnspiel-de',
  hu: 'gewinnspiel-de',
  pl: 'gewinnspiel-de',
  de: 'gewinnspiel-de',
  at: 'gewinnspiel-de',
  ja: 'gewinnspiel-de',
  it: 'gewinnspiel-de',
};

const GiveawayPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('giveaway', locale || 'en');
  const description = getSeoDescription('giveaway', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'giveaway';

  const languageAlternates = Object.keys(pathsByLocale).map((lang) => ({
    hrefLang: HREF_LANGS[lang as keyof typeof HREF_LANGS],
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
        <Giveaway country="de" />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'sutazde',
        'common',
        'contact',
      ])),
    },
  };
};

export default GiveawayPage;
