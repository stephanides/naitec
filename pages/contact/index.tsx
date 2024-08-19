import React, { useEffect } from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Contact } from '@/src/pages';

const KontaktPage = () => {
  return (
    <Layout withOrnament={true}>
      <Contact />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'common'])),
      locale,
    },
  };
};

export default KontaktPage;
