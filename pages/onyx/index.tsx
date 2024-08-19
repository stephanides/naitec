import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Onyx } from '@/src/pages';

const OnyxPage = () => {
  return (
    <Layout withOrnament>
      <Onyx />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'onyx'])),
    },
  };
};

export default OnyxPage;
