import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BASE_URL } from '@/src/shared/constants';
import { NextSeo } from 'next-seo';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { useRouter } from 'next-translate-routes';
import { CasseteAirConditioning } from '@/src/pages';

const pathsByLocale = {
  en: 'cassette-air-conditioning',
  sk: 'kazetova-klimatizacia',
  cs: 'kazetova-klimatizace',
  hu: 'kazettas-klima',
  pl: 'klimatyzacja-kasetowa',
  de: 'kassettenklimaanlag',
  at: 'kassettenklimaanlag',
  ja: 'cassette-air-conditioning',
  it: 'aria-condizionata-a-cassette',
};

const CassetteAirConditioningPage = () => {
  const { locale } = useRouter();
  const title = getSeoTitle('cassette_air_conditioning', locale || 'en');
  const description = getSeoDescription(
    'cassette_air_conditioning',
    locale || 'en'
  );

  const localizedPath =
    pathsByLocale[locale as keyof typeof pathsByLocale] ||
    'cassette-air-conditioning';

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
        <CasseteAirConditioning />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['cassette', 'common'])),
    },
  };
};

export default CassetteAirConditioningPage;
