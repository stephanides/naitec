import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
