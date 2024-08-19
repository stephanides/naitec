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
        mx={rem(20)}
        pb={rem(80)}
        border="5px solid"
        borderColor="#FFFFFF"
        borderTop="none"
        borderRadius={rem(20)}
        position="relative"
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
              background="linear-gradient(to right, #344F5F, #6CA5C5)"
              fontSize={rem(192)}
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
              pt={rem(60)}
              maxW={rem(1600)}
              width="100%"
              minH={rem(480)}
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
              fontSize={rem(48)}
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
        <Box position="absolute" zIndex={1} bottom={0} left={0} right={0}>
          <HomeShape />
        </Box>
      </Box>
      <Box
        mt={rem(20)}
        mx={rem(20)}
        pt={rem(80)}
        pb={rem(80)}
        border="5px solid"
        borderColor="#FFFFFF"
        borderRadius={rem(20)}
        position="relative"
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
              background={LINEAR_GRADIENTS.sensitive_pro}
              fontSize={rem(134)}
              fontWeight={600}
              textTransform="uppercase"
              textAlign="center"
              backgroundClip="text"
              color="transparent"
              position="absolute"
              top={0}
            >
              Sensitive Pro
            </NeueHaasGroteskDisplay>
            <Flex
              position="relative"
              maxW={rem(1600)}
              width="100%"
              minH={rem(480)}
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
              fontSize={rem(48)}
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
        <Box position="absolute" zIndex={1} bottom={0} left={0} right={0}>
          <HomeShape />
        </Box>
      </Box>
      <Box
        mt={rem(20)}
        mx={rem(20)}
        pt={rem(80)}
        pb={rem(80)}
        border="5px solid"
        borderColor="#FFFFFF"
        borderRadius={rem(20)}
        position="relative"
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
              background={LINEAR_GRADIENTS.sensitive}
              fontSize={rem(180)}
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
              pt={rem(50)}
              maxW={rem(1600)}
              width="100%"
              minH={rem(480)}
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
              fontSize={rem(48)}
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
        <Box position="absolute" zIndex={1} bottom={0} left={0} right={0}>
          <HomeShape />
        </Box>
      </Box>
      <Flex my={rem(20)}>
        <Box
          mt={rem(20)}
          mx={rem(20)}
          pt={rem(20)}
          pb={rem(80)}
          border="5px solid"
          borderColor="#FFFFFF"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
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
                fontSize={rem(180)}
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
                pt={rem(100)}
                maxW={rem(1600)}
                width="100%"
                minH={rem(480)}
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
                fontSize={rem(48)}
                mt={rem(40)}
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
            bottom={rem(-60)}
            left={0}
            right={0}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
        <Box
          mt={rem(20)}
          mx={rem(20)}
          pt={rem(20)}
          pb={rem(80)}
          border="5px solid"
          borderColor="#FFFFFF"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
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
                fontSize={rem(180)}
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
                pt={rem(100)}
                maxW={rem(1600)}
                width="100%"
                minH={rem(480)}
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
                fontSize={rem(48)}
                color="text.link"
                mt={rem(40)}
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
            bottom={rem(-60)}
            left={0}
            right={0}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
      </Flex>
      <NaitecApplicationMinimal />
      <Flex my={rem(20)}>
        <Box
          mt={rem(20)}
          mx={rem(20)}
          border="5px solid"
          borderColor="#FFFFFF"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width="50%"
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
            >
              <Box position="absolute" top={rem(70)}>
                <NeueHaasGroteskDisplay
                  fontSize={rem(48)}
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
                maxW={rem(1600)}
                width="100%"
                minH={rem(480)}
                justify="center"
                overflow="hidden"
                pointerEvents="none"
              >
                <img
                  src="/images/lisa/lisa-main.png"
                  style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                  alt="Lisa"
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={rem(-60)}
            left={0}
            right={0}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
        <Box
          mt={rem(20)}
          mx={rem(20)}
          border="5px solid"
          borderColor="#FFFFFF"
          borderRadius={rem(20)}
          position="relative"
          overflow="hidden"
          width="50%"
        >
          <Box zIndex={2} position="relative">
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
              flexDir="column"
            >
              <Box top={rem(70)} position="absolute">
                <NeueHaasGroteskDisplay
                  fontSize={rem(48)}
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
                maxW={rem(1600)}
                width="100%"
                minH={rem(480)}
                justify="center"
                overflow="hidden"
                pointerEvents="none"
              >
                <img
                  src="/images/fireplace/fireplace-main.png"
                  style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
                  alt="Fireplace diffuser"
                />
              </Flex>
            </Flex>
          </Box>
          <Box
            position="absolute"
            zIndex={1}
            bottom={rem(-60)}
            left={0}
            right={0}
          >
            <HomeShapeMobile />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
