import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrivacyPolicy } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL, HREF_LANGS } from '@/src/shared/constants';

const pathsByLocale = {
  sk: 'zasady-ochrany-osobnych-udajov',
  cs: 'zasady-ochrany-osobnich-udaju',
  en: 'privacy-policy',
  hu: 'szemelyes-adatok-vedelmenek-elvei',
  pl: 'zasady-ochrony-danych-osobowych',
  de: 'datenschutzerklaerung',
  at: 'datenschutzerklaerung',
  ja: 'privacy-policy',
};

const PrivacyPolicyPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('privacy_policy', locale || 'en');
  const description = getSeoDescription('privacy_policy', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'privacy-policy';

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
        <PrivacyPolicy />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['privacypolicy', 'common'])),
    },
  };
};

export default PrivacyPolicyPage;
