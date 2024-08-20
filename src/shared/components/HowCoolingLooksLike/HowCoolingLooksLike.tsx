import { Box, Flex } from '@chakra-ui/react';
import { Container } from '../Container';
import { NeueHaasGroteskDisplay } from '../Typography';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';

type HowCoolingLooksLikeProps = {
  color: string;
};

export const HowCoolingLooksLike = ({ color }: HowCoolingLooksLikeProps) => {
  const { t } = useTranslation('common');
  return (
    <Box py={{ base: rem(50), md: rem(80), xl: rem(143) }}>
      <Container>
        <Flex justifyContent="center">
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(30), xs: rem(48), xl: rem(64) }}
            fontWeight={600}
            color="text.link"
            lineHeight="112%"
            textAlign="center"
            maxW={rem(523)}
            sx={{
              strong: {
                backgroundImage: color,
                backgroundClip: 'text',
                color: 'transparent',
              },
            }}
            dangerouslySetInnerHTML={{
              __html: `${t('how_diffuse_cooling_looks_like')} `,
            }}
          />
        </Flex>
      </Container>
    </Box>
  );
};
