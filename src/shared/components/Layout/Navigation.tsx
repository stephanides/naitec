import React, { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { rem } from 'polished';
import { LocaleSwitch } from '../LocaleSwitch';
import Link from 'next-translate-routes/link';
import { Container } from '../Container';
import { ChevronDown, Hamburger, LogoDark } from '../../design';
import { useTranslation } from 'next-i18next';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { INTERNAL_ROUTES } from '../../constants';

export const SOCIAL_LINKS = {
  fb: '/',
  ig: '/',
  in: '/',
};

type NavigationProps = {
  toggleMobile: () => void;
  dark?: boolean;
};

export const NAV_ITEMS_PRODUCTS = {
  AIR_CONDITIONING: [
    { name: 'stellair', href: INTERNAL_ROUTES.STELLAIR },
    { name: 'sensitive_pro', href: INTERNAL_ROUTES.SENSITIVE_PRO, new: true },
    { name: 'sensitive', href: INTERNAL_ROUTES.SENSITIVE },
    { name: 'onyx', href: INTERNAL_ROUTES.ONYX },
    { name: 'smart', href: INTERNAL_ROUTES.SMART },
    {
      name: 'multi_split_system',
      href: INTERNAL_ROUTES.MULTI_SPLIT_SYSTEM,
      new: true,
    },
  ],
  ACCESSORIES: [{ name: 'lisa_voice_control', href: INTERNAL_ROUTES.LISA }],
  HOUSEHOLD: [
    {
      name: 'fireplace_diffuser',
      href: INTERNAL_ROUTES.FIREPLACE_DIFFUSER,
      new: true,
    },
  ],
  COMMERCIAL_UNITS: [
    {
      name: 'cassette_air_conditioning',
      href: INTERNAL_ROUTES.CASSETTE_AIR_CONDITIONING,
      new: true,
    },
    {
      name: 'ducted_air_conditioning',
      href: INTERNAL_ROUTES.DUCTED_AIR_CONDITIONING,
      new: true,
    },
  ],
};

export const Navigation = ({ toggleMobile, dark = false }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation(['common']);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check on component mount
    const initialScrollPosition = window.scrollY;
    if (initialScrollPosition > 60) {
      setScrolled(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop navigation */}
      <Box
        mt={0}
        py={{
          base: scrolled ? rem(20) : rem(30),
          lg: scrolled ? rem(20) : rem(50),
        }}
        as="nav"
        position="fixed"
        top={0}
        zIndex={99}
        display={{ base: 'none', md: 'block' }}
        width="100%"
        transition="all .3s ease-out"
        background={scrolled ? '#f2f2f2' : 'transparent'}
      >
        <Container>
          <Flex alignItems="center" justifyContent="space-between">
            <Link href={INTERNAL_ROUTES.HOME}>
              <Box width={{ base: rem(140), lg: rem(190) }}>
                <LogoDark />
              </Box>
            </Link>
            <Flex columnGap={rem(40)} ml={{ base: rem(20), lg: 0 }}>
              <Box position="relative">
                <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                    <a>
                      <Flex
                        alignItems="center"
                        columnGap={rem(8)}
                        cursor="pointer"
                      >
                        <NeueHaasGroteskDisplay
                          color="text.link"
                          fontWeight={600}
                        >
                          {t('navigation_products')}
                        </NeueHaasGroteskDisplay>
                        <ChevronDown />
                      </Flex>
                    </a>
                  </PopoverTrigger>

                  <PopoverContent
                    boxShadow="0px 0px 15px 0px rgb(0 0 0 / 10%)"
                    background="white"
                    py={rem(60)}
                    px={rem(70)}
                    borderRadius={rem(20)}
                    border="none"
                    width="auto"
                    top={2}
                  >
                    <Flex columnGap={rem(68)}>
                      <Box>
                        <NeueHaasGroteskText
                          color="text.link"
                          fontWeight={700}
                          fontSize={rem(18)}
                          mb={rem(20)}
                          textTransform="uppercase"
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
                        <Box>
                          <NeueHaasGroteskText
                            color="text.link"
                            fontWeight={700}
                            fontSize={rem(18)}
                            mb={rem(20)}
                            textTransform="uppercase"
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
                        <Box>
                          <NeueHaasGroteskText
                            color="text.link"
                            fontWeight={700}
                            fontSize={rem(18)}
                            mt={rem(40)}
                            mb={rem(20)}
                            textTransform="uppercase"
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
                    </Flex>
                    <Box mt={rem(20)}>
                      <NeueHaasGroteskText
                        color="text.link"
                        fontWeight={700}
                        fontSize={rem(18)}
                        mb={rem(20)}
                        textTransform="uppercase"
                      >
                        {t('navigation_commercial_units')}
                      </NeueHaasGroteskText>
                      <Box>
                        {NAV_ITEMS_PRODUCTS.COMMERCIAL_UNITS.map((child) => (
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
                  </PopoverContent>
                </Popover>
              </Box>
              <Link href={INTERNAL_ROUTES.WHERE_TO_BUY}>
                <NeueHaasGroteskDisplay color="text.link" fontWeight={600}>
                  {t('navigation_where_to_buy')}
                </NeueHaasGroteskDisplay>
              </Link>
              <Link href={INTERNAL_ROUTES.SUPPORT}>
                <NeueHaasGroteskDisplay color="text.link" fontWeight={600}>
                  {t('navigation_support')}
                </NeueHaasGroteskDisplay>
              </Link>
              <Link href={INTERNAL_ROUTES.CONTACT}>
                <NeueHaasGroteskDisplay color="text.link" fontWeight={600}>
                  {t('navigation_contact')}
                </NeueHaasGroteskDisplay>
              </Link>
            </Flex>
            <Flex
              width={{ base: rem(140), lg: rem(190) }}
              justifyContent="flex-end"
            >
              <LocaleSwitch />
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* Mobile navigation */}
      <Box
        mt={0}
        py={scrolled ? rem(10) : rem(20)}
        position="fixed"
        top={0}
        as="nav"
        zIndex={99}
        display={{ base: 'block', md: 'none' }}
        width="100%"
        transition="all .3s ease-out"
        background={scrolled ? '#f2f2f2' : 'transparent'}
      >
        <Flex px={rem(25)} alignItems="center" justifyContent="space-between">
          <Box>
            <Link href={INTERNAL_ROUTES.HOME}>
              <Box width={{ base: rem(116), md: rem(180) }}>
                <LogoDark />
              </Box>
            </Link>
          </Box>
          <Flex columnGap={rem(10)}>
            <LocaleSwitch />
            <Flex
              p={rem(10)}
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={toggleMobile}
            >
              <Hamburger />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
