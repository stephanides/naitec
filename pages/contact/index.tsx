import React, { useEffect } from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { Box } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

const KontaktPage = () => {
  const t = useTranslations();
  return (
    <Layout>
      <Box>{t('navigation.products')}</Box>
    </Layout>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../../locale/${locale}.json`)).default,
    },
  };
}

export default KontaktPage;
