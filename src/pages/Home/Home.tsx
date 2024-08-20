import {
  NaitecApplicationMinimal,
  NeueHaasGroteskDisplay,
  ProductHeadingButtonsHome,
} from '@/src/shared/components';
import { INTERNAL_ROUTES } from '@/src/shared/constants';
import {
  HomeShape,
  HomeShapeMobile,
  LINEAR_GRADIENTS,
} from '@/src/shared/design';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';

export const Home = () => {
  const { t } = useTranslation(['homepage', 'common']);

  return (
    <Box>
      <Box
        mx={{ base: rem(12), xs: rem(20) }}
        pb={{ base: rem(45), xs: rem(80) }}
        border="5px solid"
        borderColor="#FFFFFF"
        borderTop="none"
        borderRadius={rem(20)}
        position="relative"
        mt={{ base: rem(40), lg: rem(0) }}
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
            <NeueHaasGroteskDisplay
              background="linear-gradient(to right, #344F5F, #6CA5C5)"
              fontSize={{
                base: rem(60),
                xs: rem(72),
                md: rem(100),
                lg: rem(140),
                xl: rem(192),
              }}
              fontWeight={600}
              textTransform="uppercase"
              textAlign="center"
              backgroundClip="text"
              color="transparent"
              position="absolute"
              top={0}
            >
              Stellair
            </NeueHaasGroteskDisplay>
            <Flex
              position="relative"
              pt={{
                base: rem(28),
                xs: rem(20),
                md: rem(32),
                lg: rem(60),
                xl: rem(80),
                '2xl': rem(60),
              }}
              maxW={{
                base: rem(400),
                xs: rem(600),
                md: rem(800),
                lg: rem(1000),
                xl: rem(1400),
                '2xl': rem(1600),
              }}
              width={{
                base: rem(400),
                xs: rem(600),
                md: rem(800),
                lg: rem(1000),
                xl: rem(1400),
                '2xl': rem(1600),
              }}
              justify="center"
              overflow="hidden"
            >
              <img
                src="/images/stellair/stellair-main.png"
                style={{ width: '130%', height: 'auto', maxWidth: 'none' }}
                alt="Stellair"
              />
            </Flex>
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
          top={0}
          right={rem(-20)}
          width={rem(40)}
          height={rem(150)}
          background="linear-gradient(180deg, rgba(242, 242, 242, 1) 33%, rgba(255, 255, 255, 0) 100%)"
        />
        <Box
          position="absolute"
          top={0}
          left={rem(-20)}
          width={rem(40)}
          height={rem(150)}
          background="linear-gradient(180deg, rgba(242, 242, 242, 1) 33%, rgba(255, 255, 255, 0) 100%)"
        />
        <Box
          position="absolute"
          zIndex={1}
          bottom={0}
          left={0}
          right={0}
          display={{ base: 'none', md: 'block' }}
        >
          <HomeShape />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={0}
          left={0}
          right={0}
          display={{ base: 'block', md: 'none' }}
        >
          <HomeShapeMobile />
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
        mt={{ base: rem(40), lg: rem(20) }}
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
            <NeueHaasGroteskDisplay
              background={LINEAR_GRADIENTS.sensitive_pro}
              fontSize={{
                base: rem(42),
                xs: rem(60),
                md: rem(90),
                lg: rem(110),
                xl: rem(134),
              }}
              fontWeight={600}
              textTransform="uppercase"
              textAlign="center"
              backgroundClip="text"
              color="transparent"
              position="absolute"
              top={rem(6)}
            >
              Sensitive Pro
            </NeueHaasGroteskDisplay>
            <Flex
              position="relative"
              pt={{
                base: rem(8),
                xs: rem(4),
                md: rem(32),
                lg: rem(32),
                xl: rem(20),
                '2xl': rem(0),
              }}
              maxW={{
                base: rem(480),
                xs: rem(700),
                md: rem(800),
                lg: rem(1000),
                xl: rem(1400),
                '2xl': rem(1600),
              }}
              width={{
                base: rem(480),
                xs: rem(700),
                md: rem(800),
                lg: rem(1000),
                xl: rem(1400),
                '2xl': rem(1600),
              }}
              justify="center"
              overflow="hidden"
            >
              <img
                src="/images/sensitive-pro/sensitive-pro-main.png"
                style={{ width: '130%', height: 'auto', maxWidth: 'none' }}
                alt="Sensitive Pro"
              />
            </Flex>
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
          bottom={0}
          left={0}
          right={0}
          display={{ base: 'none', md: 'block' }}
        >
          <HomeShape />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={0}
          left={0}
          right={0}
          display={{ base: 'block', md: 'none' }}
        >
          <HomeShapeMobile />
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
        mt={{ base: rem(40), lg: rem(20) }}
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
            <NeueHaasGroteskDisplay
              background={LINEAR_GRADIENTS.sensitive}
              fontSize={{
                base: rem(52),
                xs: rem(68),
                md: rem(94),
                lg: rem(134),
                xl: rem(180),
              }}
              fontWeight={600}
              textTransform="uppercase"
              textAlign="center"
              backgroundClip="text"
              color="transparent"
              position="absolute"
              top={0}
            >
              Sensitive
            </NeueHaasGroteskDisplay>
            <Flex
              position="relative"
              pt={{
                base: rem(28),
                xs: rem(20),
                md: rem(32),
                lg: rem(60),
                xl: rem(80),
                '2xl': rem(50),
              }}
              maxW={{
                base: rem(400),
                xs: rem(600),
                md: rem(800),
                lg: rem(1000),
                xl: rem(1400),
                '2xl': rem(1600),
              }}
              width={{
                base: rem(400),
                xs: rem(600),
                md: rem(800),
                lg: rem(1000),
                xl: rem(1400),
                '2xl': rem(1600),
              }}
              justify="center"
              overflow="hidden"
            >
              <img
                src="/images/sensitive/sensitive-main.png"
                style={{ width: '130%', height: 'auto', maxWidth: 'none' }}
                alt="Sensitive"
              />
            </Flex>
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
          bottom={0}
          left={0}
          right={0}
          display={{ base: 'none', md: 'block' }}
        >
          <HomeShape />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          bottom={0}
          left={0}
          right={0}
          display={{ base: 'block', md: 'none' }}
        >
          <HomeShapeMobile />
        </Box>
      </Box>
      <Flex
        my={{ base: 0, xl: rem(20) }}
        flexDir={{ base: 'column', xl: 'row' }}
        mx={{ base: rem(20), xl: 0 }}
        mb={{ base: rem(20) }}
      >
        <Box
          mt={rem(20)}
          mx={{ base: 0, xl: rem(20) }}
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
            >
              <NeueHaasGroteskDisplay
                background={LINEAR_GRADIENTS.onyx}
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
              >
                Onyx
              </NeueHaasGroteskDisplay>
              <Flex
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
                  base: rem(400),
                  xs: rem(600),
                  md: rem(800),
                  lg: rem(1000),
                  xl: rem(700),
                  '2xl': rem(800),
                }}
                width={{
                  base: rem(400),
                  xs: rem(600),
                  md: rem(800),
                  lg: rem(1000),
                  xl: rem(700),
                  '2xl': rem(800),
                }}
                justify="center"
                overflow="hidden"
              >
                <img
                  src="/images/onyx/onyx-main.png"
                  style={{ width: '130%', height: 'auto', maxWidth: 'none' }}
                  alt="Onyx"
                />
              </Flex>
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
            bottom={{ base: 0, xl: rem(-60) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block' }}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
        <Box
          mt={rem(20)}
          mx={{ base: 0, xl: rem(20) }}
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
            >
              <NeueHaasGroteskDisplay
                background={LINEAR_GRADIENTS.smart}
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
              >
                Smart
              </NeueHaasGroteskDisplay>
              <Flex
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
                  base: rem(400),
                  xs: rem(600),
                  md: rem(800),
                  lg: rem(1000),
                  xl: rem(700),
                  '2xl': rem(800),
                }}
                width={{
                  base: rem(400),
                  xs: rem(600),
                  md: rem(800),
                  lg: rem(1000),
                  xl: rem(700),
                  '2xl': rem(800),
                }}
                justify="center"
                overflow="hidden"
              >
                <img
                  src="/images/smart/smart-main.png"
                  style={{ width: '130%', height: 'auto', maxWidth: 'none' }}
                  alt="Smart"
                />
              </Flex>
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
            bottom={{ base: 0, xl: rem(-60) }}
            left={0}
            right={0}
            display={{ base: 'block', md: 'none', xl: 'block' }}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
      </Flex>
      <NaitecApplicationMinimal />
      <Flex
        my={{ base: 0, xl: rem(20) }}
        flexDir={{ base: 'column', xl: 'row' }}
        mx={{ base: rem(20), xl: 0 }}
        mb={{ base: rem(20) }}
      >
        <Box
          mt={rem(20)}
          mx={{ base: 0, xl: rem(20) }}
          pt={rem(20)}
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
              <Flex
                position="relative"
                maxW={{ base: rem(600), xl: rem(1600) }}
                width="100%"
                justify="center"
                overflow="hidden"
                pointerEvents="none"
                pt={{ base: rem(20), '2xl': 0 }}
              >
                <img
                  src="/images/lisa/lisa-main-desktop.png"
                  style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                  alt="Lisa"
                />
              </Flex>
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
            display={{ base: 'block', md: 'none', xl: 'block' }}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
        <Box
          mt={rem(20)}
          mx={{ base: 0, xl: rem(20) }}
          pt={rem(20)}
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
              <Flex
                position="relative"
                maxW={{ base: rem(600), xl: rem(1600) }}
                width="100%"
                justify="center"
                overflow="hidden"
                pointerEvents="none"
                pt={{ base: rem(20), '2xl': 0 }}
                ml={{ base: 'auto', xl: 0 }}
              >
                <img
                  src="/images/fireplace/fireplace-main-desktop.png"
                  style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                  alt="Fireplace diffuser"
                />
              </Flex>
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
            display={{ base: 'block', md: 'none', xl: 'block' }}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
