import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SensitivePro } from '@/src/pages';

const SensitiveProPage = () => {
  return (
    <Layout withOrnament>
      <SensitivePro />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'sensitivepro'])),
    },
  };
};

export default SensitiveProPage;
