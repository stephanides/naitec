import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Lisa } from '@/src/pages';

const LisaVoiceControlPage = () => {
  return (
    <Layout>
      <Lisa />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['lisa', 'common'])),
    },
  };
};

export default LisaVoiceControlPage;
