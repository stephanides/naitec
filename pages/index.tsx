import React, { useEffect } from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Home } from '@/src/pages';

const HomePage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage', 'common'])),
    },
  };
};

export default HomePage;
