import {
  Container,
  Label,
  NeueHaasGroteskDisplay,
  StellairSensitive,
} from '@/src/shared/components';
import { Product } from '@/src/shared/constants';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { SupportDetailItem } from './SupportDetailItem';

type SupportDetailProps = {
  product: Product;
};

const getTitle = (title: string, t: any) => {
  if (title === 'fireplace') {
    return t('common:fireplace_diffuser');
  }

  if (title === 'cassette_air_conditioning') {
    return t('common:cassette_air_conditioning');
  }

  if (title === 'ducted_air_conditioning') {
    return t('common:ducted_air_conditioning');
  }

  if (title === 'multi_split_system') {
    return t('common:multi_split_system');
  }

  return title;
};

export const SupportDetail = ({ product }: SupportDetailProps) => {
  const { t } = useTranslation(['support', 'common']);

  const productTitle = getTitle(product?.title, t);
  return (
    <Box>
      <Container>
        <Flex justifyContent="center">
          <Label text={t('label')} color="text.link" borderColor="text.link" />
        </Flex>
        <Flex justifyContent="center" mt={rem(25)}>
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
            color="text.link"
            textAlign="center"
            lineHeight="112%"
            fontWeight={600}
            sx={{
              strong: {
                backgroundImage: product.color || '#393939',
                backgroundClip: 'text',
                color: product.color ? 'transparent' : '#393939',
              },
            }}
            dangerouslySetInnerHTML={{
              __html: `Naitec <strong>${productTitle}</strong>`,
            }}
          />
        </Flex>
        <Box mt={rem(30)}>
          {product?.supportDocuments?.map((item, index) => (
            <SupportDetailItem
              key={index}
              title={item.title}
              items={item.items}
            />
          ))}
        </Box>
      </Container>
      <Box mt={rem(125)}>
        <StellairSensitive stellair sensitivePro />
      </Box>
    </Box>
  );
};
