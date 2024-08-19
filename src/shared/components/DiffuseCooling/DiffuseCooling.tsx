import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { Label } from '../Label';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { Container } from '../Container';
import Image from 'next/image';

type DiffuseCoolingProps = {
  color: string;
  light?: boolean;
};

export const DiffuseCooling = ({ color, light=false }: DiffuseCoolingProps) => {
  const { t } = useTranslation();
  return (
    <Box pb={rem(150)} position="relative" overflow="hidden">
      <Container>
        <Label
          text={t('diffuse_cooling_label')}
          color={light ? 'text.inverted' : 'text.link'}
          borderColor={light ? 'text.inverted' : 'text.link'}
        />
        <NeueHaasGroteskDisplay
          fontSize={rem(64)}
          mt={rem(25)}
          fontWeight={600}
          color={light ? 'text.inverted' : 'text.link'}
          lineHeight="112%"
          sx={{
            strong: {
              backgroundImage: color,
              backgroundClip: 'text',
              color: 'transparent',
            },
          }}
          dangerouslySetInnerHTML={{ __html: t('diffuse_cooling_title') }}
        />
        <NeueHaasGroteskText
          fontSize={rem(22)}
          mt={rem(40)}
          maxW={rem(930)}
          letterSpacing="calc(16px * -0.02)"
          color={light ? 'text.secondary' : 'text.light'}
          fontWeight={500}
          sx={{ strong: { color: light ? 'text.strong' : 'text.link' } }}
          dangerouslySetInnerHTML={{
            __html: t('diffuse_cooling_description'),
          }}
        />
        <Flex columnGap={rem(20)} mt={rem(80)}>
          <Box width="50%" position="relative">
            <Image
              src="/images/common/diffuse-cooling-1.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Diffuse cooling 1"
            />
            <Flex
              position="absolute"
              left={0}
              right={0}
              bottom={rem(20)}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <NeueHaasGroteskDisplay
                fontSize={rem(30)}
                mt={rem(25)}
                fontWeight={600}
                backgroundImage={color}
                backgroundClip="text"
                color="transparent"
                lineHeight="112%"
                dangerouslySetInnerHTML={{
                  __html: t('diffuse_cooling_image_title_1'),
                }}
              />
              <NeueHaasGroteskDisplay
                fontSize={rem(22)}
                mt={rem(4)}
                fontWeight={500}
                lineHeight="112%"
                color="rgba(17,27,33,.6)"
              >
                {t('diffuse_cooling_image_description_1')}
              </NeueHaasGroteskDisplay>
            </Flex>
          </Box>
          <Box width="50%" position="relative">
            <Image
              src="/images/common/diffuse-cooling-2.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Diffuse cooling 2"
            />
            <Flex
              position="absolute"
              left={0}
              right={0}
              bottom={rem(20)}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <NeueHaasGroteskDisplay
                fontSize={rem(30)}
                mt={rem(25)}
                fontWeight={600}
                backgroundImage={color}
                backgroundClip="text"
                color="transparent"
                lineHeight="112%"
                dangerouslySetInnerHTML={{
                  __html: t('diffuse_cooling_image_title_2'),
                }}
              />
              <NeueHaasGroteskDisplay
                fontSize={rem(22)}
                mt={rem(4)}
                fontWeight={500}
                lineHeight="112%"
                color="rgba(17,27,33,.6)"
              >
                {t('diffuse_cooling_image_description_2')}
              </NeueHaasGroteskDisplay>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
