import {
  NaitecApplicationMinimal,
  NeueHaasGroteskDisplay,
  ProductHeadingButtonsHome,
} from '@/src/shared/components';
import { BUNNY_CDN_URL, INTERNAL_ROUTES } from '@/src/shared/constants';
import {
  HomeShape,
  HomeShape4k,
  HomeShapeMobile,
  LINEAR_GRADIENTS,
} from '@/src/shared/design';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next-translate-routes/link';
import { rem } from 'polished';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
  const { t } = useTranslation(['homepage', 'common']);
  const { ref: sensitiveProView, inView: sensitiveProInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: sensitiveView, inView: sensitiveInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: onyxView, inView: onyxInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: smartView, inView: smartInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: lisaView, inView: lisaInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: fireplaceView, inView: fireplaceInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: casseteView, inView: casseteInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: ductedView, inView: ductedInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box>
      <Box position="relative">
        <Box
          mx={{ base: rem(12), xs: rem(20) }}
          pb={{ base: rem(45), xs: rem(80) }}
          border="5px solid"
          borderColor="#FFFFFF"
          borderTop="none"
          borderRadius={rem(20)}
          position="relative"
          mt={{ base: rem(40), lg: rem(0) }}
          overflow="hidden"
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
              overflow="hidden"
            >
              <Flex
                width="100%"
                justifyContent="center"
                animation={'fadeDown 1s cubic-bezier(0.25, 0.8, 0.25, 1)'}
                sx={{
                  '@keyframes fadeDown': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(-60px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <NeueHaasGroteskDisplay
                  background="linear-gradient(to right, #344F5F, #6CA5C5)"
                  backgroundPosition="left center"
                  backgroundSize="600% 200%"
                  fontSize={{
                    base: rem(60),
                    xs: rem(72),
                    md: rem(100),
                    lg: rem(140),
                    xl: rem(150),
                    '3xl': rem(192),
                  }}
                  fontWeight={600}
                  textTransform="uppercase"
                  textAlign="center"
                  backgroundClip="text"
                  color="transparent"
                  position="absolute"
                  top={0}
                  transition="all .3s ease-out"
                  animation="backgroundAnimation 4s linear infinite"
                  sx={{
                    '@keyframes backgroundAnimation': {
                      '0%': {
                        backgroundPosition: 'left center',
                      },
                      '50%': {
                        backgroundPosition: 'right center',
                      },
                      '100%': {
                        backgroundPosition: 'left center',
                      },
                    },
                  }}
                >
                  Stellair
                </NeueHaasGroteskDisplay>
              </Flex>
              <Link href={INTERNAL_ROUTES.STELLAIR}>
                <Flex
                  position="relative"
                  mt={{
                    base: rem(28),
                    xs: rem(20),
                    md: rem(32),
                    lg: rem(60),
                    xl: rem(54),
                    '3xl': rem(60),
                  }}
                  maxW={{
                    base: rem(546),
                    xs: rem(780),
                    md: rem(1040),
                    lg: rem(1300),
                    xl: rem(1500),
                    '3xl': rem(2080),
                  }}
                  width={{
                    base: rem(546),
                    xs: rem(780),
                    md: rem(1040),
                    lg: rem(1300),
                    xl: rem(1500),
                    '3xl': rem(2080),
                  }}
                  justify="center"
                  aspectRatio="75 / 23"
                  animation={'fadeUp 1s cubic-bezier(0.25, 0.8, 0.25, 1)'}
                  sx={{
                    '@keyframes fadeUp': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateY(60px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <img
                    src={`${BUNNY_CDN_URL}/stellair/stellair-main.png`}
                    style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                    alt="Stellair"
                  />
                </Flex>
              </Link>
            </Flex>
            <Box>
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(24), md: rem(48) }}
                color="text.link"
                fontWeight={600}
                textAlign="center"
              >
                {t('stellair_text')}
              </NeueHaasGroteskDisplay>
              <Box mt={rem(20)}>
                <ProductHeadingButtonsHome
                  productHref={INTERNAL_ROUTES.STELLAIR}
                />
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={rem(-20)}
            left={0}
            right={0}
            display={{ base: 'none', md: 'block', '3xl': 'none' }}
          >
            <HomeShape />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: rem(-30), xs: rem(-60), md: rem(-100) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none' }}
          >
            <HomeShapeMobile />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: rem(-30), xs: rem(-60), md: rem(-100) }}
            left={0}
            right={0}
            display={{ base: 'none', '3xl': 'block' }}
          >
            <HomeShape4k />
          </Box>
        </Box>
        <Box
          position="absolute"
          top={0}
          right={rem(10)}
          width={rem(40)}
          height={rem(150)}
          background="linear-gradient(180deg, rgba(242, 242, 242, 1) 33%, rgba(255, 255, 255, 0) 100%)"
        />
        <Box
          position="absolute"
          top={0}
          left={rem(10)}
          width={rem(40)}
          height={rem(150)}
          background="linear-gradient(180deg, rgba(242, 242, 242, 1) 33%, rgba(255, 255, 255, 0) 100%)"
        />
      </Box>
      <Box
        mx={{ base: rem(12), xs: rem(20) }}
        pb={{ base: rem(45), xs: rem(80) }}
        pt={{ base: rem(20), xs: rem(40), '2xl': rem(80) }}
        border="5px solid"
        borderColor="#FFFFFF"
        borderRadius={rem(20)}
        position="relative"
        mt={{ base: rem(20), lg: rem(20) }}
        overflow="hidden"
      >
        <Box zIndex={2} position="relative">
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            position="relative"
            flexDir="column"
            overflow="hidden"
            ref={sensitiveProView}
          >
            <NeueHaasGroteskDisplay
              background={LINEAR_GRADIENTS.sensitive_pro}
              backgroundPosition="left center"
              backgroundSize="600% 200%"
              fontSize={{
                base: rem(42),
                xs: rem(60),
                md: rem(90),
                lg: rem(110),
                xl: rem(110),
                '3xl': rem(134),
              }}
              opacity={sensitiveProInView ? 1 : 0}
              transform={
                sensitiveProInView ? 'translateY(0)' : 'translateY(-100%)'
              }
              fontWeight={600}
              textTransform="uppercase"
              textAlign="center"
              backgroundClip="text"
              color="transparent"
              position="absolute"
              top={rem(6)}
              transition="all 1s ease-out"
              animation="backgroundAnimation 4s linear infinite"
              sx={{
                '@keyframes backgroundAnimation': {
                  '0%': {
                    backgroundPosition: 'left center',
                  },
                  '50%': {
                    backgroundPosition: 'right center',
                  },
                  '100%': {
                    backgroundPosition: 'left center',
                  },
                },
              }}
            >
              Sensitive Pro
            </NeueHaasGroteskDisplay>
            <Link href={INTERNAL_ROUTES.SENSITIVE_PRO}>
              <Flex
                opacity={sensitiveProInView ? 1 : 0}
                transform={
                  sensitiveProInView ? 'translateY(0)' : 'translateY(40px)'
                }
                transition="all 1s ease-out"
                position="relative"
                pt={{
                  base: rem(12),
                  xs: rem(20),
                  md: rem(32),
                  lg: rem(32),
                  xl: rem(24),
                  '3xl': rem(10),
                }}
                maxW={{
                  base: rem(546),
                  xs: rem(780),
                  md: rem(1040),
                  lg: rem(1300),
                  xl: rem(1500),
                  '3xl': rem(2080),
                }}
                width={{
                  base: rem(546),
                  xs: rem(780),
                  md: rem(1040),
                  lg: rem(1300),
                  xl: rem(1500),
                  '3xl': rem(2080),
                }}
                justify="center"
              >
                <img
                  src={`${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-main.png`}
                  style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                  alt="Sensitive Pro"
                />
              </Flex>
            </Link>
          </Flex>
          <Box>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(24), md: rem(48) }}
              color="text.link"
              fontWeight={600}
              textAlign="center"
            >
              {t('sensitive_pro_text')}
            </NeueHaasGroteskDisplay>
            <Box mt={rem(20)}>
              <ProductHeadingButtonsHome
                productHref={INTERNAL_ROUTES.SENSITIVE_PRO}
              />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={rem(-20)}
          left={0}
          right={0}
          display={{ base: 'none', md: 'block', '3xl': 'none' }}
        >
          <HomeShape />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={{ base: rem(-30), xs: rem(-60), md: rem(-100) }}
          left={0}
          right={0}
          display={{ base: 'block', md: 'none' }}
        >
          <HomeShapeMobile />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={{ base: rem(-30), xs: rem(-60), md: rem(-100) }}
          left={0}
          right={0}
          display={{ base: 'none', '3xl': 'block' }}
        >
          <HomeShape4k />
        </Box>
      </Box>
      <Box
        mx={{ base: rem(12), xs: rem(20) }}
        pb={{ base: rem(45), xs: rem(80) }}
        pt={{ base: rem(20), xs: rem(40), '2xl': rem(80) }}
        border="5px solid"
        borderColor="#FFFFFF"
        borderRadius={rem(20)}
        position="relative"
        mt={{ base: rem(20), lg: rem(20) }}
        overflow="hidden"
      >
        <Box zIndex={2} position="relative">
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            position="relative"
            flexDir="column"
            overflow="hidden"
            ref={sensitiveView}
          >
            <NeueHaasGroteskDisplay
              background={LINEAR_GRADIENTS.sensitive}
              opacity={sensitiveInView ? 1 : 0}
              transform={
                sensitiveInView ? 'translateY(0)' : 'translateY(-100%)'
              }
              backgroundPosition="left center"
              backgroundSize="600% 200%"
              fontSize={{
                base: rem(52),
                xs: rem(68),
                md: rem(94),
                lg: rem(134),
                xl: rem(140),
                '3xl': rem(180),
              }}
              fontWeight={600}
              textTransform="uppercase"
              textAlign="center"
              backgroundClip="text"
              color="transparent"
              position="absolute"
              top={0}
              transition="all 1s ease-out"
              animation="backgroundAnimation 4s linear infinite"
              sx={{
                '@keyframes backgroundAnimation': {
                  '0%': {
                    backgroundPosition: 'left center',
                  },
                  '50%': {
                    backgroundPosition: 'right center',
                  },
                  '100%': {
                    backgroundPosition: 'left center',
                  },
                },
              }}
            >
              Sensitive
            </NeueHaasGroteskDisplay>
            <Link href={INTERNAL_ROUTES.SENSITIVE}>
              <Flex
                position="relative"
                opacity={sensitiveInView ? 1 : 0}
                transform={
                  sensitiveInView ? 'translateY(0)' : 'translateY(60px)'
                }
                transition="all 1s ease-out"
                pt={{
                  base: rem(28),
                  xs: rem(20),
                  md: rem(32),
                  lg: rem(60),
                  xl: rem(54),
                  '3xl': rem(50),
                }}
                maxW={{
                  base: rem(546),
                  xs: rem(780),
                  md: rem(1040),
                  lg: rem(1300),
                  xl: rem(1500),
                  '3xl': rem(2080),
                }}
                width={{
                  base: rem(546),
                  xs: rem(780),
                  md: rem(1040),
                  lg: rem(1300),
                  xl: rem(1500),
                  '3xl': rem(2080),
                }}
                justify="center"
              >
                <img
                  src={`${BUNNY_CDN_URL}/sensitive/sensitive-main.png`}
                  style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                  alt="Sensitive"
                />
              </Flex>
            </Link>
          </Flex>
          <Box>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(24), md: rem(48) }}
              color="text.link"
              fontWeight={600}
              textAlign="center"
            >
              {t('sensitive_text')}
            </NeueHaasGroteskDisplay>
            <Box mt={rem(20)}>
              <ProductHeadingButtonsHome
                productHref={INTERNAL_ROUTES.SENSITIVE}
              />
            </Box>
          </Box>
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={rem(-20)}
          left={0}
          right={0}
          display={{ base: 'none', md: 'block', '3xl': 'none' }}
        >
          <HomeShape />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={{ base: rem(-30), xs: rem(-60), md: rem(-100) }}
          left={0}
          right={0}
          display={{ base: 'block', md: 'none' }}
        >
          <HomeShapeMobile />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={{ base: rem(-30), xs: rem(-60), md: rem(-100) }}
          left={0}
          right={0}
          display={{ base: 'none', '3xl': 'block' }}
        >
          <HomeShape4k />
        </Box>
      </Box>
      <Flex
        my={{ base: 0, xl: rem(20) }}
        flexDir={{ base: 'column', xl: 'row' }}
        mx={{ base: rem(12), xs: rem(20), xl: 0 }}
        mb={{ base: rem(20) }}
      >
        <Box
          mt={{ base: rem(20), xl: 0 }}
          ml={{ base: 0, xl: rem(20) }}
          mr={{ base: 0, xl: rem(10) }}
          pt={rem(20)}
          pb={rem(80)}
          border="5px solid"
          borderColor="#FFFFFF"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width={{ base: '100%', xl: '50%' }}
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
              ref={onyxView}
            >
              <NeueHaasGroteskDisplay
                background={LINEAR_GRADIENTS.onyx}
                opacity={onyxInView ? 1 : 0}
                transform={onyxInView ? 'translateY(0)' : 'translateY(-100%)'}
                backgroundPosition="left center"
                backgroundSize="600% 200%"
                fontSize={{
                  base: rem(52),
                  xs: rem(68),
                  md: rem(94),
                  lg: rem(134),
                  '2xl': rem(160),
                }}
                fontWeight={600}
                textTransform="uppercase"
                textAlign="center"
                backgroundClip="text"
                color="transparent"
                position="absolute"
                top={0}
                transition="all 1s ease-out"
                animation="backgroundAnimation 4s linear infinite"
                sx={{
                  '@keyframes backgroundAnimation': {
                    '0%': {
                      backgroundPosition: 'left center',
                    },
                    '50%': {
                      backgroundPosition: 'right center',
                    },
                    '100%': {
                      backgroundPosition: 'left center',
                    },
                  },
                }}
              >
                Onyx
              </NeueHaasGroteskDisplay>
              <Link href={INTERNAL_ROUTES.ONYX}>
                <Flex
                  opacity={onyxInView ? 1 : 0}
                  transform={onyxInView ? 'translateY(0)' : 'translateY(60px)'}
                  transition="all 1s ease-out"
                  position="relative"
                  pt={{
                    base: rem(22),
                    xs: rem(20),
                    md: rem(32),
                    lg: rem(60),
                    xl: rem(90),
                    '2xl': rem(110),
                  }}
                  maxW={{
                    base: rem(520),
                    xs: rem(780),
                    md: rem(1040),
                    lg: rem(1300),
                    xl: rem(910),
                    '2xl': rem(1040),
                  }}
                  width={{
                    base: rem(520),
                    xs: rem(780),
                    md: rem(1040),
                    lg: rem(1300),
                    xl: rem(910),
                    '2xl': rem(1040),
                  }}
                  justify="center"
                >
                  <img
                    src={`${BUNNY_CDN_URL}/onyx/onyx-main.png`}
                    style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                    alt="Onyx"
                  />
                </Flex>
              </Link>
            </Flex>
            <Box>
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(24), md: rem(48) }}
                color="text.link"
                fontWeight={600}
                textAlign="center"
              >
                {t('onyx_text')}
              </NeueHaasGroteskDisplay>
              <Box mt={rem(20)}>
                <ProductHeadingButtonsHome productHref={INTERNAL_ROUTES.ONYX} />
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', md: 'block', xl: 'none' }}
          >
            <HomeShape />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: rem(-20), xl: rem(-60) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block', '3xl': 'none' }}
          >
            <HomeShapeMobile />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', '3xl': 'block' }}
          >
            <HomeShape4k />
          </Box>
        </Box>
        <Box
          mt={{ base: rem(20), xl: 0 }}
          mr={{ base: 0, xl: rem(20) }}
          ml={{ base: 0, xl: rem(10) }}
          pt={rem(20)}
          pb={rem(80)}
          border="5px solid"
          borderColor="#FFFFFF"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width={{ base: '100%', xl: '50%' }}
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
              ref={smartView}
            >
              <NeueHaasGroteskDisplay
                background={LINEAR_GRADIENTS.smart}
                opacity={smartInView ? 1 : 0}
                transform={smartInView ? 'translateY(0)' : 'translateY(-100%)'}
                backgroundPosition="left center"
                backgroundSize="600% 200%"
                fontSize={{
                  base: rem(52),
                  xs: rem(68),
                  md: rem(94),
                  lg: rem(134),
                  '2xl': rem(160),
                }}
                fontWeight={600}
                textTransform="uppercase"
                textAlign="center"
                backgroundClip="text"
                color="transparent"
                position="absolute"
                top={0}
                transition="all 1s ease-out"
                animation="backgroundAnimation 4s linear infinite"
                sx={{
                  '@keyframes backgroundAnimation': {
                    '0%': {
                      backgroundPosition: 'left center',
                    },
                    '50%': {
                      backgroundPosition: 'right center',
                    },
                    '100%': {
                      backgroundPosition: 'left center',
                    },
                  },
                }}
              >
                Smart
              </NeueHaasGroteskDisplay>
              <Link href={INTERNAL_ROUTES.SMART}>
                <Flex
                  opacity={smartInView ? 1 : 0}
                  transform={smartInView ? 'translateY(0)' : 'translateY(60px)'}
                  transition="all 1s ease-out"
                  position="relative"
                  pt={{
                    base: rem(22),
                    xs: rem(20),
                    md: rem(32),
                    lg: rem(60),
                    xl: rem(90),
                    '2xl': rem(110),
                  }}
                  maxW={{
                    base: rem(520),
                    xs: rem(780),
                    md: rem(1040),
                    lg: rem(1300),
                    xl: rem(910),
                    '2xl': rem(1040),
                  }}
                  width={{
                    base: rem(520),
                    xs: rem(780),
                    md: rem(1040),
                    lg: rem(1300),
                    xl: rem(910),
                    '2xl': rem(1040),
                  }}
                  justify="center"
                >
                  <img
                    src={`${BUNNY_CDN_URL}/smart/smart-main.png`}
                    style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                    alt="Smart"
                  />
                </Flex>
              </Link>
            </Flex>
            <Box>
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(24), md: rem(48) }}
                color="text.link"
                fontWeight={600}
                textAlign="center"
              >
                {t('smart_text')}
              </NeueHaasGroteskDisplay>
              <Box mt={rem(20)}>
                <ProductHeadingButtonsHome
                  productHref={INTERNAL_ROUTES.SMART}
                />
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', md: 'block', xl: 'none' }}
          >
            <HomeShape />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: rem(-20), xl: rem(-60) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block', '3xl': 'none' }}
          >
            <HomeShapeMobile />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', '3xl': 'block' }}
          >
            <HomeShape4k />
          </Box>
        </Box>
      </Flex>
      <NaitecApplicationMinimal />
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        px={{ base: rem(12), xs: rem(20), xl: 0 }}
        pb={{ base: rem(20) }}
        position="relative"
        top={rem(1)}
      >
        <Box
          mt={rem(20)}
          ml={{ base: 0, xl: rem(20) }}
          mr={{ base: 0, xl: rem(10) }}
          pt={rem(20)}
          border="5px solid"
          borderColor="#FFFFFF"
          backgroundColor="#FAFAFA"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width={{ base: '100%', xl: '50%' }}
          zIndex={2}
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
              ref={lisaView}
            >
              <Box position="absolute" top={{ base: rem(20), xl: rem(70) }}>
                <NeueHaasGroteskDisplay
                  fontSize={{ base: rem(28), xs: rem(32), lg: rem(48) }}
                  fontWeight={600}
                  textTransform="uppercase"
                  textAlign="center"
                  color="text.link"
                  position="relative"
                  top={0}
                >
                  Lisa
                </NeueHaasGroteskDisplay>
                <Box mt={rem(20)}>
                  <ProductHeadingButtonsHome
                    productHref={INTERNAL_ROUTES.LISA}
                  />
                </Box>
              </Box>
              <Link href={INTERNAL_ROUTES.LISA}>
                <Flex
                  position="relative"
                  maxW={{ base: rem(600), xl: rem(1600) }}
                  width="100%"
                  justify="center"
                  overflow="hidden"
                  pointerEvents="none"
                  pt={{ base: rem(20), '2xl': 0 }}
                  opacity={lisaInView ? 1 : 0}
                  transform={lisaInView ? 'translateY(0)' : 'translateY(60px)'}
                  transition="all 1s ease-out"
                >
                  <img
                    src={`${BUNNY_CDN_URL}/lisa/lisa-main-desktop.png`}
                    style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                    alt="Lisa"
                  />
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', md: 'block', xl: 'none' }}
          >
            <HomeShape />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: 0, xl: rem(-60) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block', '3xl': 'none' }}
          >
            <HomeShapeMobile />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', '3xl': 'block' }}
          >
            <HomeShape4k />
          </Box>
        </Box>
        <Box
          mt={rem(20)}
          mr={{ base: 0, xl: rem(20) }}
          ml={{ base: 0, xl: rem(10) }}
          pt={rem(20)}
          border="5px solid"
          borderColor="#FFFFFF"
          backgroundColor="#FAFAFA"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width={{ base: '100%', xl: '50%' }}
          zIndex={2}
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
              ref={fireplaceView}
            >
              <Box position="absolute" top={{ base: rem(20), xl: rem(70) }}>
                <NeueHaasGroteskDisplay
                  fontSize={{ base: rem(28), xs: rem(32), lg: rem(48) }}
                  fontWeight={600}
                  textTransform="uppercase"
                  textAlign="center"
                  color="text.link"
                  position="relative"
                  top={0}
                >
                  {t('common:fireplace_diffuser')}
                </NeueHaasGroteskDisplay>
                <Box mt={rem(20)}>
                  <ProductHeadingButtonsHome
                    productHref={INTERNAL_ROUTES.FIREPLACE_DIFFUSER}
                  />
                </Box>
              </Box>
              <Link
                href={INTERNAL_ROUTES.FIREPLACE_DIFFUSER}
                style={{ marginLeft: 'auto' }}
              >
                <Flex
                  position="relative"
                  maxW={{ base: rem(600), xl: rem(1600) }}
                  width="100%"
                  justifyContent="flex-end"
                  overflow="hidden"
                  pointerEvents="none"
                  pt={{ base: rem(20), '2xl': 0 }}
                  opacity={fireplaceInView ? 1 : 0}
                  transform={
                    fireplaceInView ? 'translateY(0)' : 'translateY(60px)'
                  }
                  transition="all 1s ease-out"
                >
                  <img
                    src={`${BUNNY_CDN_URL}/fireplace/fireplace-main-desktop.png`}
                    style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                    alt="Fireplace diffuser"
                  />
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', md: 'block', xl: 'none' }}
          >
            <HomeShape />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: 0, xl: rem(-60) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block', '3xl': 'none' }}
          >
            <HomeShapeMobile />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', '3xl': 'block' }}
          >
            <HomeShape4k />
          </Box>
        </Box>
      </Flex>
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        px={{ base: rem(12), xs: rem(20), xl: 0 }}
        pb={{ base: rem(20) }}
        position="relative"
        top={rem(1)}
      >
        <Box
          mt={rem(20)}
          ml={{ base: 0, xl: rem(20) }}
          mr={{ base: 0, xl: rem(10) }}
          pt={rem(20)}
          border="5px solid"
          borderColor="#FFFFFF"
          backgroundColor="#FAFAFA"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width={{ base: '100%', xl: '50%' }}
          zIndex={2}
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
              ref={casseteView}
            >
              <Box position="absolute" top={{ base: rem(20), xl: rem(70) }}>
                <NeueHaasGroteskDisplay
                  fontSize={{ base: rem(28), xs: rem(32), lg: rem(48) }}
                  fontWeight={600}
                  textTransform="uppercase"
                  textAlign="center"
                  color="text.link"
                  position="relative"
                  top={0}
                >
                  {t('common:cassette_air_conditioning')}
                </NeueHaasGroteskDisplay>
                <Box mt={rem(20)}>
                  <ProductHeadingButtonsHome
                    productHref={INTERNAL_ROUTES.CASSETTE_AIR_CONDITIONING}
                  />
                </Box>
              </Box>
              <Link href={INTERNAL_ROUTES.CASSETTE_AIR_CONDITIONING}>
                <Flex
                  position="relative"
                  maxW={{ base: rem(600), xl: rem(1600) }}
                  width="100%"
                  justifyContent="flex-end"
                  overflow="hidden"
                  pointerEvents="none"
                  pt={{ base: rem(40), md: rem(80), '2xl': 0 }}
                  opacity={casseteInView ? 1 : 0}
                  transform={
                    casseteInView ? 'translateY(0)' : 'translateY(60px)'
                  }
                  transition="all 1s ease-out"
                >
                  <img
                    src={`${BUNNY_CDN_URL}/cassette-air-conditioning/cassette-conditioning-main.png`}
                    style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                    alt="Cassete air conditioner"
                  />
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', md: 'block', xl: 'none' }}
          >
            <HomeShape />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: 0, xl: rem(-120) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block', '3xl': 'none' }}
          >
            <HomeShapeMobile />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', '3xl': 'block' }}
          >
            <HomeShape4k />
          </Box>
        </Box>
        <Box
          mt={rem(20)}
          mr={{ base: 0, xl: rem(20) }}
          ml={{ base: 0, xl: rem(10) }}
          pt={rem(20)}
          border="5px solid"
          borderColor="#FFFFFF"
          backgroundColor="#FAFAFA"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width={{ base: '100%', xl: '50%' }}
          zIndex={2}
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
              ref={ductedView}
            >
              <Box position="absolute" top={{ base: rem(20), xl: rem(70) }}>
                <NeueHaasGroteskDisplay
                  fontSize={{ base: rem(28), xs: rem(32), lg: rem(48) }}
                  fontWeight={600}
                  textTransform="uppercase"
                  textAlign="center"
                  color="text.link"
                  position="relative"
                  top={0}
                >
                  {t('common:ducted_air_conditioning')}
                </NeueHaasGroteskDisplay>
                <Box mt={rem(20)}>
                  <ProductHeadingButtonsHome
                    productHref={INTERNAL_ROUTES.DUCTED_AIR_CONDITIONING}
                  />
                </Box>
              </Box>
              <Link href={INTERNAL_ROUTES.DUCTED_AIR_CONDITIONING}>
                <Flex
                  position="relative"
                  maxW={{ base: rem(600), xl: rem(1600) }}
                  width="100%"
                  justifyContent="flex-end"
                  overflow="hidden"
                  pointerEvents="none"
                  pt={{ base: rem(40), md: rem(80), '2xl': 0 }}
                  ml={{ base: 'auto', xl: 0 }}
                  opacity={ductedInView ? 1 : 0}
                  transform={
                    ductedInView ? 'translateY(0)' : 'translateY(60px)'
                  }
                  transition="all 1s ease-out"
                >
                  <img
                    src={`${BUNNY_CDN_URL}/ducted-air-conditioning/ducted-conditioning-main.png`}
                    style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                    alt="Ducted air conditioner"
                  />
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', md: 'block', xl: 'none' }}
          >
            <HomeShape />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={{ base: 0, xl: rem(-120) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block', '3xl': 'none' }}
          >
            <HomeShapeMobile />
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={0}
            left={0}
            right={0}
            display={{ base: 'none', '3xl': 'block' }}
          >
            <HomeShape4k />
          </Box>
        </Box>
        <Box
          position="absolute"
          left={0}
          bottom={0}
          right={0}
          height={{ base: '25%', xl: '50%' }}
          backgroundColor="background.primary"
          zIndex={1}
        />
      </Flex>
    </Box>
  );
};
