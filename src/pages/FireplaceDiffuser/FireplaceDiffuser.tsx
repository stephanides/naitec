import {
  CollapsibleItem,
  Container,
  Label,
  NeueHaasGroteskDisplay,
  NeueHaasGroteskText,
  ProductGallery,
  StellairSensitive,
} from '@/src/shared/components';
import { BUNNY_CDN_URL } from '@/src/shared/constants';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { useInView } from 'react-intersection-observer';

export const FireplaceDifusser = () => {
  const { t } = useTranslation(['fireplace', 'common']);
  const { ref: headingView, inView: headingInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: descriptionView, inView: descriptionInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <Box>
      <Container>
        <Flex
          columnGap={{ base: rem(80), '3xl': rem(128) }}
          flexDir={{ base: 'column', xl: 'row' }}
        >
          <Box width={{ base: '100%', xl: '60%' }}>
            <ProductGallery
              images={[
                {
                  src: `${BUNNY_CDN_URL}/fireplace/fireplace-1-new.jpg`,
                  alt: 'Fireplace diffuser',
                },
                {
                  src: `${BUNNY_CDN_URL}/fireplace/fireplace-2-new.jpg`,
                  alt: 'Fireplace diffuser 2',
                },
                {
                  src: `${BUNNY_CDN_URL}/fireplace/fireplace-3.jpg`,
                  alt: 'Fireplace diffuser 3',
                },
                {
                  src: `${BUNNY_CDN_URL}/fireplace/fireplace-4.jpg`,
                  alt: 'Fireplace diffuser 4',
                },
                {
                  src: `${BUNNY_CDN_URL}/fireplace/fireplace-5.jpg`,
                  alt: 'Fireplace diffuser 5',
                },
              ]}
            />
          </Box>
          <Box width={{ base: '100%', xl: '40%' }} pt={rem(40)}>
            <Box ref={headingView}>
              <Box
                opacity={headingInView ? 1 : 0}
                transform={headingInView ? 'translateX(0)' : 'translateX(40px)'}
                transition="all 1s ease-out"
                transitionDelay="200ms"
              >
                <Label
                  text={t('common:new')}
                  color="text.naitec_blue"
                  borderColor="text.naitec_blue"
                />
              </Box>
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(32), xs: rem(48) }}
                color="text.link"
                fontWeight={600}
                my={rem(12)}
                opacity={headingInView ? 1 : 0}
                transform={headingInView ? 'translateX(0)' : 'translateX(40px)'}
                transition="all 1s ease-out"
                transitionDelay="400ms"
              >
                {t('title')}
              </NeueHaasGroteskDisplay>
              <NeueHaasGroteskText
                sx={{ strong: { color: 'text.link', fontWeight: 500 } }}
                color="text.light"
                fontWeight={500}
                fontSize={{ base: rem(16), xs: rem(20) }}
                lineHeight="130%"
                dangerouslySetInnerHTML={{ __html: t('description1') }}
                opacity={headingInView ? 1 : 0}
                transform={headingInView ? 'translateX(0)' : 'translateX(40px)'}
                transition="all 1s ease-out"
                transitionDelay="600ms"
              />
            </Box>
            <Box mt={{ base: rem(44), xl: rem(72) }} ref={descriptionView}>
              <Box
                opacity={headingInView ? 1 : 0}
                transform={headingInView ? 'translateX(0)' : 'translateX(40px)'}
                transition="all 1s ease-out"
                transitionDelay="600ms"
              >
                <CollapsibleItem
                  title={t('common:description')}
                  text={
                    <Box>
                      <NeueHaasGroteskText
                        fontSize={rem(17)}
                        color="text.light"
                        mb={rem(17)}
                      >
                        {t('description2')}
                      </NeueHaasGroteskText>
                      <NeueHaasGroteskText
                        mb={rem(17)}
                        fontSize={rem(17)}
                        color="text.light"
                      >
                        {t('description3')}
                      </NeueHaasGroteskText>
                      <NeueHaasGroteskText
                        fontSize={rem(17)}
                        color="text.light"
                      >
                        {t('description4')}
                      </NeueHaasGroteskText>
                    </Box>
                  }
                />
              </Box>
              <Box
                opacity={headingInView ? 1 : 0}
                transform={headingInView ? 'translateX(0)' : 'translateX(40px)'}
                transition="all 1s ease-out"
                transitionDelay="800ms"
              >
                <CollapsibleItem
                  title={t('common:details')}
                  text={
                    <Box>
                      <NeueHaasGroteskText
                        fontSize={rem(17)}
                        color="text.light"
                      >
                        <strong>{t('common:dimensions')}:</strong>{' '}
                        1000x236x215mm
                      </NeueHaasGroteskText>
                      <NeueHaasGroteskText
                        fontSize={rem(17)}
                        color="text.light"
                      >
                        <strong>{t('common:tank_volume')}:</strong> 4.04l
                      </NeueHaasGroteskText>
                      <NeueHaasGroteskText
                        fontSize={rem(17)}
                        color="text.light"
                        mt={rem(16)}
                      >
                        {t('info')}
                      </NeueHaasGroteskText>
                    </Box>
                  }
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box mt={{ base: rem(60), xs: rem(125) }}>
        <StellairSensitive stellair sensitivePro />
      </Box>
    </Box>
  );
};
