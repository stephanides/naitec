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

export const SupportDetail = ({ product }: SupportDetailProps) => {
  const { t } = useTranslation(['support', 'common']);

  const productTitle =
    product?.title === 'fireplace'
      ? t('common:fireplace_diffuser')
      : product?.title;
  return (
    <Box>
      <Container>
        <Flex justifyContent="center">
          <Label text={t('label')} color="text.link" borderColor="text.link" />
        </Flex>
        <Flex justifyContent="center" mt={rem(25)}>
          <NeueHaasGroteskDisplay
            fontSize={rem(64)}
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
        <StellairSensitive />
      </Box>
    </Box>
  );
};
