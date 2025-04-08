import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LegalNotice, PrivacyPolicy } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL, HREF_LANGS } from '@/src/shared/constants';

const pathsByLocale = {
  sk: 'pravne-informacie',
  cs: 'pravni-informace',
  en: 'legal-notice',
  hu: 'jogi-nyilatkozat',
  pl: 'informacje-prawne',
  de: 'impressum',
  at: 'impressum',
  ja: 'legal-notice',
};

const LegalNoticePage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('legal_notice', locale || 'en');
  const description = getSeoDescription('legal_notice', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'legal-notice';

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
        <LegalNotice />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['legalnotice', 'common'])),
    },
  };
};

export default LegalNoticePage;
