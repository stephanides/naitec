import { rem } from 'polished';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next-translate-routes/link';
import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import {
  AppStore,
  ChevronDown,
  CloseSmall,
  GooglePlay,
  LogoDark,
} from '../../design';
import { EXTERNAL_ROUTES, INTERNAL_ROUTES } from '../../constants';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { useTranslation } from 'next-i18next';
import { NAV_ITEMS_PRODUCTS } from './Navigation';
import Image from 'next/image';

type NavMenuContentProps = {
  isOpen: boolean;
  toggleMobile: () => void;
  menuContentRef: any;
  setIsOpen: (value: boolean) => void;
};

export const NavMenuContent = ({
  isOpen,
  toggleMobile,
  menuContentRef,
  setIsOpen,
}: NavMenuContentProps) => {
  const router = useRouter();
  const { t } = useTranslation(['common']);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <Box
      zIndex={1000}
      background="#F2F2F2"
      width="100%"
      height="100%"
      position="fixed"
      top={0}
      transition=" all 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895)"
      right={isOpen ? 0 : '-100%'}
      pointerEvents="all"
      ref={menuContentRef}
      py={rem(20)}
      overflow="auto"
    >
      <Flex px={rem(25)} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href={INTERNAL_ROUTES.HOME}>
            <Box width={{ base: rem(116), md: rem(180) }}>
              <LogoDark />
            </Box>
          </Link>
        </Box>
        <Flex
          p={rem(10)}
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={toggleMobile}
        >
          <CloseSmall />
        </Flex>
      </Flex>
      <Box mt={rem(50)} px={rem(25)}>
        <Flex
          alignItems="center"
          columnGap={rem(8)}
          cursor="pointer"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          <NeueHaasGroteskDisplay
            color="text.link"
            fontSize={{ base: rem(22), md: rem(30) }}
            fontWeight={600}
          >
            {t('navigation_products')}
          </NeueHaasGroteskDisplay>
          <ChevronDown />
        </Flex>
        <Box {...getCollapseProps()}>
          <Box mt={rem(20)}>
            <NeueHaasGroteskText
              color="text.naitec_blue"
              fontWeight={700}
              fontSize={rem(10)}
              mb={rem(20)}
              textTransform="uppercase"
              borderBottom="1px solid"
              borderColor="text.naitec_blue"
              lineHeight={rem(20)}
            >
              {t('navigation_air_condition')}
            </NeueHaasGroteskText>
            <Box>
              {NAV_ITEMS_PRODUCTS.AIR_CONDITIONING.map((child) => (
                <Link href={child.href} key={child.name}>
                  <Flex position="relative" columnGap={rem(3)}>
                    <NeueHaasGroteskText
                      color="text.link_light"
                      fontWeight={400}
                      mb={rem(10)}
                    >
                      {t(child.name)}
                    </NeueHaasGroteskText>
                    {child.new && (
                      <NeueHaasGroteskText
                        as="span"
                        color="text.naitec_blue"
                        fontWeight={600}
                        fontSize={rem(12)}
                      >
                        {t('new')}
                      </NeueHaasGroteskText>
                    )}
                  </Flex>
                </Link>
              ))}
            </Box>
          </Box>
          <Box>
            <Box mt={rem(20)}>
              <NeueHaasGroteskText
                color="text.naitec_blue"
                fontWeight={700}
                fontSize={rem(10)}
                mb={rem(20)}
                textTransform="uppercase"
                borderBottom="1px solid"
                borderColor="text.naitec_blue"
                lineHeight={rem(20)}
                maxW={rem(400)}
              >
                {t('navigation_accessories')}
              </NeueHaasGroteskText>
              <Box>
                {NAV_ITEMS_PRODUCTS.ACCESSORIES.map((child) => (
                  <Link href={child.href} key={child.name}>
                    <NeueHaasGroteskText
                      color="text.link_light"
                      fontWeight={400}
                      mb={rem(10)}
                    >
                      {t(child.name)}
                    </NeueHaasGroteskText>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box mt={rem(20)}>
              <NeueHaasGroteskText
                color="text.naitec_blue"
                fontWeight={700}
                fontSize={rem(10)}
                mb={rem(20)}
                textTransform="uppercase"
                borderBottom="1px solid"
                borderColor="text.naitec_blue"
                lineHeight={rem(20)}
                maxW={rem(400)}
              >
                {t('navigation_household')}
              </NeueHaasGroteskText>
              <Box>
                {NAV_ITEMS_PRODUCTS.HOUSEHOLD.map((child) => (
                  <Link href={child.href} key={child.name}>
                    <Flex position="relative" columnGap={rem(3)}>
                      <NeueHaasGroteskText
                        color="text.link_light"
                        fontWeight={400}
                        mb={rem(10)}
                        position="relative"
                      >
                        {t(child.name)}
                      </NeueHaasGroteskText>
                      {child.new && (
                        <NeueHaasGroteskText
                          color="text.naitec_blue"
                          fontWeight={600}
                          fontSize={rem(12)}
                          as="span"
                        >
                          {t('new')}
                        </NeueHaasGroteskText>
                      )}
                    </Flex>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Link href="/where-to-buy">
          <NeueHaasGroteskDisplay
            color="text.link"
            fontWeight={600}
            mt={rem(40)}
            fontSize={{ base: rem(22), md: rem(30) }}
          >
            {t('navigation_where_to_buy')}
          </NeueHaasGroteskDisplay>
        </Link>
        <Link href="/support">
          <NeueHaasGroteskDisplay
            color="text.link"
            mt={rem(40)}
            fontWeight={600}
            fontSize={{ base: rem(22), md: rem(30) }}
          >
            {t('navigation_support')}
          </NeueHaasGroteskDisplay>
        </Link>
        <Link href="/contact">
          <NeueHaasGroteskDisplay
            color="text.link"
            fontWeight={600}
            mt={rem(40)}
            fontSize={{ base: rem(22), md: rem(30) }}
          >
            {t('navigation_contact')}
          </NeueHaasGroteskDisplay>
        </Link>
      </Box>
      {/* <Flex
        width="100%"
        justifyContent="center"
        height={rem(260)}
        alignItems="flex-end"
        position="relative"
        overflow="hidden"
        pb={rem(20)}
        mt={rem(80)}
      >
        <Box
          position="absolute"
          bottom={0}
          right={0}
          left={0}
          height={rem(100)}
          background="linear-gradient(180deg, rgba(255, 255, 255, 0) 33%, rgba(242, 242, 242, 1) 100%)"
          zIndex={2}
        />
        <Box
          position="absolute"
          width="100%"
          maxW={rem(400)}
          top={0}
          zIndex={1}
          px={rem(16)}
        >
          <Image
            src="/images/common/iphone-mockup.png"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              position: 'relative',
            }}
            alt="Metalinox"
          />
        </Box>

        <Flex mt={rem(60)} columnGap={rem(25)} zIndex={2} position="relative">
          <a href={EXTERNAL_ROUTES.ANDROID} target="_blank" rel="noreferrer">
            <Box width={{ base: rem(135), md: rem(170) }}>
              <GooglePlay />
            </Box>
          </a>
          <a href={EXTERNAL_ROUTES.IOS} target="_blank" rel="noreferrer">
            <Box width={{ base: rem(135), md: rem(170) }}>
              <AppStore />
            </Box>
          </a>
        </Flex>
      </Flex> */}
    </Box>
  );
};
