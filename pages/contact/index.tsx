import React, { useEffect } from 'react';
import { Layout } from '@/src/shared/components/Layout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Contact } from '@/src/pages';

const KontaktPage = () => {
  return (
    <Layout withOrnament={true}>
      <Contact />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  console.log('fuuuck', locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'common'])),
      locale,
    },
  };
};

export default KontaktPage;
