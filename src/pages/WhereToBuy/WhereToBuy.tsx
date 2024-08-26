import { Box, Flex } from '@chakra-ui/react';
import { StoreLocator } from './Map';
import { useQuery } from 'react-query';
import { StoresResponse } from '@/src/shared/types';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import {
  Container,
  Label,
  NeueHaasGroteskDisplay,
} from '@/src/shared/components';
import { ProductContactForm } from './ProductContactForm';
import { useRouter } from 'next/router';

export const WhereToBuy = () => {
  const { t } = useTranslation(['wheretobuy', 'common', 'contact']);
  const router = useRouter();
  const fetchData = async () => {
    const response = await fetch(`/api/stores`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };

  const { data, isLoading, isError } = useQuery<StoresResponse>(
    ['stores'],
    () => fetchData()
  );

  const locale = router.locale ?? 'sk';
  const isMapFirst = locale === 'sk';

  const stores = data?.data ?? [];
  return (
    <Box pb={{ base: rem(60), lg: rem(100), '2xl': rem(230) }}>
      <Flex flexDir={isMapFirst ? 'column' : 'column-reverse'} width="100%">
        <Box
          mt={{ base: rem(isMapFirst ? 0 : 40), lg: rem(isMapFirst ? 0 : 100) }}
        >
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
          >
            <Label
              text={t('heading_label')}
              color="text.link"
              borderColor="text.link"
            />
            <Flex
              maxW={{ base: rem(450), lg: rem(696) }}
              justifyContent="center"
              mt={rem(25)}
            >
              <NeueHaasGroteskDisplay
                maxW={{ base: rem(295), xs: rem(660) }}
                fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
                color="text.link"
                textAlign="center"
                lineHeight="112%"
                fontWeight={600}
                sx={{ strong: { color: 'text.naitec_blue' } }}
                dangerouslySetInnerHTML={{ __html: t('heading') }}
              />
            </Flex>
          </Flex>
          <Box
            mt={{
              base: rem(40),
              lg: rem(80),
            }}
          >
            <Container>
              <StoreLocator stores={stores} />
            </Container>
          </Box>
        </Box>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          mt={{ base: rem(isMapFirst ? 40 : 0), lg: rem(isMapFirst ? 100 : 0) }}
        >
          <Label
            text={t('write_us')}
            color="text.link"
            borderColor="text.link"
          />
          <Flex
            maxW={{ base: rem(450), lg: rem(696) }}
            justifyContent="center"
            mt={rem(25)}
          >
            <NeueHaasGroteskDisplay
              maxW={{ base: rem(295), xs: rem(554) }}
              fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
              color="text.link"
              textAlign="center"
              lineHeight="112%"
              fontWeight={600}
              sx={{ strong: { color: 'text.naitec_blue' } }}
              dangerouslySetInnerHTML={{ __html: t('need_help') }}
            />
          </Flex>
          <Box
            maxW={{ base: '100%', lg: rem(820) }}
            width="100%"
            mt={{ base: rem(20), lg: rem(60) }}
            px={rem(20)}
          >
            <ProductContactForm />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
