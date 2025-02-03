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
import { useRouter } from 'next-translate-routes';
import { rem } from 'polished';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const Lisa = () => {
  const { t } = useTranslation(['lisa', 'common']);

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
                  src: `${BUNNY_CDN_URL}/lisa/lisa-1-new.jpg`,
                  alt: 'Lisa',
                },
                {
                  src: `${BUNNY_CDN_URL}/lisa/lisa-2.jpg`,
                  alt: 'Lisa',
                },
                {
                  src: `${BUNNY_CDN_URL}/lisa/lisa-3.jpg`,
                  alt: 'Lisa',
                },
                {
                  src: `${BUNNY_CDN_URL}/lisa/lisa-4.jpg`,
                  alt: 'Lisa',
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
                Lisa Voice Control
              </NeueHaasGroteskDisplay>
              <NeueHaasGroteskText
                sx={{ strong: { color: 'text.link', fontWeight: 500 } }}
                fontWeight={500}
                color="text.light"
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
                        <strong>{t('common:dimensions')}:</strong> 68x68x25mm
                      </NeueHaasGroteskText>
                      <NeueHaasGroteskText
                        fontSize={rem(17)}
                        color="text.light"
                      >
                        <strong>{t('common:language')}:</strong>{' '}
                        {t('common:english')}
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
