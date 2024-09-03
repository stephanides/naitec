import React from 'react';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { NeueHaasGroteskDisplay } from '@/src/shared/components';
import { PrimaryButton } from '@/src/shared/design';
import { useTranslation } from 'next-i18next';

const Page404 = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Layout>
        <Flex
          minH={rem(300)}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          mb={rem(40)}
        >
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(32), xs: rem(48) }}
            color="text.link"
            fontWeight={600}
            my={rem(12)}
            textAlign="center"
          >
            {t('page_not_found')}
          </NeueHaasGroteskDisplay>
          <PrimaryButton>{t('page_not_found_cta')}</PrimaryButton>
        </Flex>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, 'common')),
    },
  };
};

export default Page404;
