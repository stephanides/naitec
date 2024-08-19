import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Smart } from '@/src/pages';

const SmartPage = () => {
  return (
    <Layout withOrnament>
      <Smart />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'smart'])),
    },
  };
};

export default SmartPage;
