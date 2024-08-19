import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Stellair } from '@/src/pages';

const StellairPage = () => {
  return (
    <Layout withOrnament>
      <Stellair />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['stellair', 'common'])),
    },
  };
};

export default StellairPage;
