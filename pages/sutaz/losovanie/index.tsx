import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Giveaway } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL, HREF_LANGS } from '@/src/shared/constants';
import EmailPicker from '@/src/pages/Giveaway/EmailPicker';
import { useQuery } from 'react-query';
import { Box } from '@chakra-ui/react';
import { rem } from 'polished';
import { StellairSensitive } from '@/src/shared/components';

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



  // const fetchData = async () => {
  //   const response = await fetch(`/api/giveaway`);

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data');
  //   }
  //   return response.json();
  // };

  // const { data, isLoading, isError } = useQuery<any>(['giveaway'], () =>
  //   fetchData()
  // );

  // if (isLoading) return <div>Loading...</div>;

  // const emails = data.data.map((item: any) => item.attributes.email);

  return (
    <>
      {/* <Layout> */}
      {/* <EmailPicker
        emails={emails}
        forcedWinner={'anickaizarikova @m_salayova'}
      /> */}
      {/* <Box>
          <StellairSensitive stellair sensitivePro />
        </Box> */}
      {/* </Layout> */}
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
