import { Box, Flex } from '@chakra-ui/react';
import { Label } from '../Label';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { Container } from '../Container';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { AppStore, GooglePlay, LINEAR_GRADIENTS } from '../../design';
import Image from 'next/image';
import { Glow } from '../Glow';
import { BUNNY_CDN_URL, EXTERNAL_ROUTES } from '../../constants';

type NaitecApplicationProps = {
  textColor?: string;
  blurOnBottom?: boolean;
  withoutBlur?: boolean;
};

export const NaitecApplication = ({
  textColor = LINEAR_GRADIENTS.stellair,
  blurOnBottom = true,
  withoutBlur = false,
}: NaitecApplicationProps) => {
  const { t } = useTranslation('common');
  return (
    <Box
      backgroundColor="background.primary"
      pt={{ base: rem(60), md: rem(80), xl: rem(168) }}
      pb={{ base: 0, '2xl': rem(152) }}
      position="relative"
      overflow="hidden"
    >
      <Container>
        <Flex columnGap={rem(60)} flexDir={{ base: 'column', '2xl': 'row' }}>
          <Box width={{ base: '100%', '2xl': '50%' }}>
            <Flex
              justifyContent={{ base: 'center', '2xl': 'flex-start' }}
              data-aos="fade-right"
            >
              <Label
                text={t('naitec_app')}
                color="text.inverted"
                borderColor="border.white"
              />
            </Flex>
            <Box mt={rem(25)} data-aos="fade-right" data-aos-delay="200">
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(30), md: rem(64) }}
                fontWeight={600}
                lineHeight={{ base: rem(36), md: rem(72) }}
                color="text.inverted"
                textAlign={{ base: 'center', '2xl': 'start' }}
                sx={{
                  span: {
                    backgroundImage: textColor,
                    backgroundClip: 'text',
                    color: 'transparent',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: t('naitec_app_title') }}
              />
              <NeueHaasGroteskText
                fontSize={{ base: rem(16), md: rem(22) }}
                fontWeight={500}
                color="text.secondary"
                mt={{ base: rem(20), md: rem(40) }}
                sx={{ strong: { color: '#EBEBEB', fontWeight: 500 } }}
                textAlign={{ base: 'center', '2xl': 'start' }}
                dangerouslySetInnerHTML={{
                  __html: t('naitec_app_description'),
                }}
              />
            </Box>
            {/* <Flex
              mt={rem(60)}
              columnGap={rem(25)}
              display={{ base: 'none', '2xl': 'flex' }}
            >
              <a
                href={EXTERNAL_ROUTES.ANDROID}
                target="_blank"
                rel="noreferrer"
              >
                <Box width={{ base: rem(135), md: rem(170) }}>
                  <GooglePlay />
                </Box>
              </a>
              <a href={EXTERNAL_ROUTES.IOS} target="_blank" rel="noreferrer">
                <Box width={{ base: rem(135), md: rem(170) }}>
                  <AppStore />
                </Box>
              </a>
            </Flex> */}
          </Box>
          <Flex
            width={{ base: '100%', '2xl': '50%' }}
            position="relative"
            height={{ base: rem(300), md: '60vw', xl: '40vw', '2xl': 'auto' }}
            minH={{ base: rem(300), xs: rem(400), '2xl': 'auto' }}
            justifyContent="center"
            mt={{ base: rem(30), '2xl': 0 }}
          >
            <Box
              position="absolute"
              width="100%"
              top={{ base: rem(40), '2xl': 0 }}
              maxW={rem(600)}
              zIndex={3}
            >
              <Image
                src={`${BUNNY_CDN_URL}/common/iphone-mockup.png`}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Iphone"
              />
            </Box>
            <Box
              position="absolute"
              top="50%"
              left={0}
              width="100%"
              aspectRatio="1566/660"
              background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
              borderRadius="30%"
              filter="blur(100px)"
              pointerEvents="none"
            />
            {/* <Flex
              mt={rem(60)}
              columnGap={rem(25)}
              display={{ base: 'flex', '2xl': 'none' }}
              position="absolute"
              bottom={rem(30)}
              zIndex={3}
            >
              <a
                href={EXTERNAL_ROUTES.ANDROID}
                target="_blank"
                rel="noreferrer"
              >
                <Box width={{ base: rem(135), md: rem(170) }}>
                  <GooglePlay />
                </Box>
              </a>
              <a href={EXTERNAL_ROUTES.IOS} target="_blank" rel="noreferrer">
                <Box width={{ base: rem(135), md: rem(170) }}>
                  <AppStore />
                </Box>
              </a>
            </Flex> */}
          </Flex>
        </Flex>
      </Container>
      {withoutBlur ? (
        <></>
      ) : (
        <Box
          position="absolute"
          bottom={blurOnBottom ? 0 : 'unset'}
          top={blurOnBottom ? 'unset' : 0}
          left={0}
          width="100%"
          transform={blurOnBottom ? 'translateY(50%)' : 'translateY(-50%)'}
          aspectRatio="1566/660"
          background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
          borderRadius="30%"
          filter="blur(100px)"
          pointerEvents="none"
        />
      )}
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        display={{ base: 'block', '2xl': 'none' }}
        height={rem(100)}
        background="linear-gradient(180deg, rgba(255, 255, 255, 0) 33%, rgba(17, 27, 33, 1) 100%)"
        zIndex={2}
      />
    </Box>
  );
};
