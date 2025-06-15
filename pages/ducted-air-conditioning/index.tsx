import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BASE_URL } from '@/src/shared/constants';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { useRouter } from 'next-translate-routes';
import { DuctedAirConditioning } from '@/src/pages';

const pathsByLocale = {
  sk: 'kanalova-klimatizacia',
  cs: 'kanalova-klimatizace',
  en: 'ducted-air-conditioning',
  hu: 'csatornás-klima',
  pl: 'klimatyzacja-kanalowa',
  de: 'kanalklimaanlage',
  at: 'kanalklimaanlage',
  ja: 'ducted-air-conditioning',
  it: 'aria-condizionata-canallizzata',
};

const DuctedAirConditioningPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('ducted_air_conditioning', locale || 'en');
  const description = getSeoDescription(
    'ducted_air_conditioning',
    locale || 'en'
  );

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] ||
    'ducted-air-conditioning';

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
              url: 'https://naitec.b-cdn.net/support/cassette-air-conditioning-support.png',
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
        <DuctedAirConditioning />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['ducted', 'common'])),
    },
  };
};

export default DuctedAirConditioningPage;
