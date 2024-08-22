import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WhereToBuy } from '@/src/pages';

const WhereToBuyPage = () => {
  return (
    <Layout>
      <WhereToBuy />
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'wheretobuy',
        'common',
        'contact',
      ])),
    },
  };
};

export default WhereToBuyPage;
