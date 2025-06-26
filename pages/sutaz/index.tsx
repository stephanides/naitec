import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Giveaway } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL, HREF_LANGS } from '@/src/shared/constants';

const pathsByLocale = {
  en: 'sutaz',
  sk: 'sutaz',
  cs: 'sutaz',
  hu: 'sutaz',
  pl: 'sutaz',
  de: 'sutaz',
  at: 'sutaz',
  ja: 'sutaz',
  it: 'sutaz',
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
        <Giveaway country="sk" />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'sutazsk',
        'common',
        'contact',
      ])),
    },
  };
};

export default GiveawayPage;
