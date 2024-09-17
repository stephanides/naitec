import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SensitivePro } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '@/src/shared/constants';

const pathsByLocale = {
  en: 'sensitive-pro',
  sk: 'sensivity-pro',
  cs: 'sensivity-pro',
  hu: 'sensivity-pro',
  pl: 'sensivity-pro',
  de: 'sensivity-pro',
  ja: 'sensivity-pro',
};

const SensitiveProPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('sensitive_pro', locale || 'en');
  const description = getSeoDescription('sensitive_pro', locale || 'en');

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] || 'sensitive-pro';

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

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'sensitivepro'])),
    },
  };
};

export default SensitiveProPage;
