import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Contact } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '@/src/shared/constants';

const pathsByLocale = {
  en: 'contact',
  sk: 'kontakt',
  cs: 'kontakt',
  hu: 'kontakt',
  pl: 'kontakt',
  de: 'kontakt',
  at: 'kontakt',
  ja: 'contact',
};

const KontaktPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('contact', locale || 'en');
  const description = getSeoDescription('contact', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'contact';

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
        <Contact />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'common'])),
      locale,
    },
  };
};

export default KontaktPage;
