import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Sensitive } from '@/src/pages';

const SensitivePage = () => {
  return (
    <Layout withOrnament>
      <Sensitive />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'sensitive'])),
    },
  };
};

export default SensitivePage;
