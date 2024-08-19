import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FireplaceDifusser } from '@/src/pages';

const FireplaceDifusserPage = () => {
  return (
    <Layout>
      <FireplaceDifusser />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['fireplace', 'common'])),
    },
  };
};

export default FireplaceDifusserPage;
