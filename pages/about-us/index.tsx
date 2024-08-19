import React, { useEffect } from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const AboutUsPage = () => {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Box>{t('navigation')}</Box>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default AboutUsPage;
