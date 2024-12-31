import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Container } from '../Container';
import Image from 'next/image';
import { Label } from '../Label';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { rem } from 'polished';
import { LINEAR_GRADIENTS } from '../../design';
import { BUNNY_CDN_URL } from '../../constants';
import { useInView } from 'react-intersection-observer';

type CleanAirProps = {
  color: string;
  imageOnLeft?: boolean;
  light?: boolean;
};

export const CleanAir = ({
  color,
  imageOnLeft = false,
  light = false,
}: CleanAirProps) => {
  const { t } = useTranslation();
  const { ref: headingView, inView: headingInView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <Box overflowX="hidden">
      <Container>
        <Flex
          alignItems="center"
          columnGap={rem(52)}
          flexDir={{
            base: 'column',
            lg: imageOnLeft ? 'row-reverse' : 'row',
          }}
          ref={headingView}
        >
          <Box
            width={{ base: '100%', lg: '50%' }}
            opacity={headingInView ? 1 : 0}
            transform={headingInView ? 'translateX(0)' : 'translateX(100%)'}
            transition="all 1s ease-out"
          >
            <Label
              text={t('clean_air_label')}
              color={light ? 'text.inverted' : 'text.link'}
              borderColor={light ? 'text.inverted' : 'text.link'}
            />
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(30), md: rem(64) }}
              lineHeight={{ base: rem(30), md: rem(64) }}
              fontWeight={600}
              color={light ? 'text.inverted' : 'text.link'}
              mt={rem(25)}
              sx={{
                strong: {
                  backgroundImage: color,
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
              dangerouslySetInnerHTML={{ __html: t('clean_air_title') }}
            />
            <NeueHaasGroteskText
              display={{ base: 'none', lg: 'block' }}
              mt={rem(20)}
              lineHeight="130%"
              fontSize={rem(22)}
              color={light ? 'text.secondary' : 'text.light'}
              fontWeight={500}
              sx={{
                strong: {
                  color: light ? 'text.strong' : 'text.link',
                  fontWeight: 500,
                },
              }}
              dangerouslySetInnerHTML={{
                __html:
                  t('clean_air_description_1') +
                  ' ' +
                  t('clean_air_description_2'),
              }}
            />
            <NeueHaasGroteskText
              display={{ base: 'block', lg: 'none' }}
              mt={rem(20)}
              lineHeight="130%"
              fontSize={{ base: rem(16), md: rem(22) }}
              color={light ? 'text.secondary' : 'text.light'}
              fontWeight={500}
              sx={{
                strong: {
                  color: light ? 'text.strong' : 'text.link',
                  fontWeight: 500,
                },
              }}
              dangerouslySetInnerHTML={{
                __html: t('clean_air_description_1'),
              }}
            />
          </Box>
          <Box
            width={{ base: '100%', lg: '50%' }}
            mt={{ base: rem(30), lg: 0 }}
          >
            <Image
              src={`${BUNNY_CDN_URL}/common/clean-air.jpg`}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
              alt="Globe"
            />
          </Box>
          <NeueHaasGroteskText
            display={{ base: 'block', lg: 'none' }}
            mt={rem(30)}
            lineHeight="130%"
            fontSize={{ base: rem(16), md: rem(22) }}
            color={light ? 'text.secondary' : 'text.light'}
            fontWeight={500}
            sx={{
              strong: {
                color: light ? 'text.strong' : 'text.link',
                fontWeight: 500,
              },
            }}
            dangerouslySetInnerHTML={{
              __html: t('clean_air_description_2'),
            }}
          />
        </Flex>
      </Container>
    </Box>
  );
};
