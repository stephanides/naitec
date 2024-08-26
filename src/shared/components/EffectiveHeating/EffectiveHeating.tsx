import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { Label } from '../Label';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { Container } from '../Container';
import Image from 'next/image';

type EffectiveHeatingProps = {
  color: string;
  image1: string;
  image2: string;
  blurOnBottom?: boolean;
};

export const EffectiveHeating = ({
  color,
  image1,
  image2,
  blurOnBottom = false,
}: EffectiveHeatingProps) => {
  const { t } = useTranslation();
  return (
    <Box
      position="relative"
      overflow="hidden"
      pt={{ base: rem(40), md: rem(80), lg: rem(100) }}
    >
      <Container>
        <Label
          text={t('effective_heating_label')}
          color="white"
          borderColor="white"
        />
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(30), md: rem(64) }}
          mt={rem(25)}
          fontWeight={600}
          color="text.inverted"
          lineHeight="112%"
          sx={{
            strong: {
              backgroundImage: color,
              backgroundClip: 'text',
              color: 'transparent',
            },
          }}
          dangerouslySetInnerHTML={{ __html: t('effective_heating_title') }}
        />
        <NeueHaasGroteskText
          fontWeight={500}
          fontSize={{ base: rem(16), md: rem(22) }}
          mt={{ base: rem(20), md: rem(40) }}
          maxW={rem(930)}
          letterSpacing="calc(16px * -0.02)"
          color="text.secondary"
          sx={{ strong: { color: 'text.inverted' } }}
          dangerouslySetInnerHTML={{
            __html: t('effective_heating_description'),
          }}
        />
        <Flex columnGap={rem(20)} mt={{ base: rem(40), md: rem(80) }}>
          <Box width="50%" borderRadius={rem(20)} overflow="hidden">
            <Image
              src={image1}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Effective heating"
            />
          </Box>
          <Box width="50%" borderRadius={rem(20)} overflow="hidden">
            <Image
              src={image2}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Effective heating 2"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
