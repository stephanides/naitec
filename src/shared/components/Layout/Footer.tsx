import { useEffect } from 'react';
import AOS from 'aos';
import { Box, Flex, Text, TextProps } from '@chakra-ui/react';
import { rem } from 'polished';
import { Container } from '../Container';
import { LogoLight } from '../../design';
import { NeueHaasGroteskDisplay } from '../Typography';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
  EMAILS,
  EXTERNAL_ROUTES,
  INTERNAL_ROUTES,
  PHONE_NUMBERS,
} from '../../constants';
import { ArrowUp } from '../../design/icons/ArrowUp';

const currentYear = new Date().getFullYear();

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Title = ({ children }: { children: string }) => (
  <NeueHaasGroteskDisplay
    color="text.inverted"
    fontWeight={600}
    fontSize={rem(20)}
    mb={rem(44)}
    textAlign={{ base: 'left' }}
  >
    {children}
  </NeueHaasGroteskDisplay>
);

const Item = ({
  children,
  href,
  isExternal = false,
  ...rest
}: { children: string; href: string; isExternal?: boolean } & TextProps) => (
  <>
    {isExternal ? (
      <a href={href} target="_blank">
        <Text
          color="text.inverted"
          opacity={0.75}
          fontWeight={300}
          fontSize={{ base: rem(18) }}
          mb={rem(30)}
          textAlign={{ base: 'left' }}
          transition="all .3s ease"
          _hover={{ opacity: 1 }}
          {...rest}
        >
          {children}
        </Text>
      </a>
    ) : (
      <Link href={href}>
        <Text
          color="text.inverted"
          opacity={0.75}
          fontWeight={300}
          fontSize={{ base: rem(18) }}
          mb={rem(30)}
          textAlign={{ base: 'left' }}
          transition="all .3s ease"
          _hover={{ opacity: 1 }}
          {...rest}
        >
          {children}
        </Text>
      </Link>
    )}
  </>
);

export const Footer = () => {
  const { t } = useTranslation('common');
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  // const handleScrollToContent = (content: string) => {
  //   if (router.pathname !== '/') {
  //     router.push(`/#${content}`);
  //   } else {
  //     scroller.scrollTo(content, {
  //       duration: 700,
  //       delay: 50,
  //       smooth: true,
  //     });
  //   }
  // };
  return (
    <Box
      pt={{ base: rem(40), md: rem(80) }}
      pb={{ base: rem(40), md: rem(60) }}
      backgroundColor="background.primary"
      borderTop="1px solid"
      borderColor="rgba(255, 255, 255, .2)"
    >
      <Container>
        <Flex alignItems="flex-start" pb={rem(140)}>
          <Box width={{ base: rem(190) }} mr={rem(60)}>
            <LogoLight />
          </Box>
          <Flex columnGap={rem(60)}>
            <Box>
              <Title>{t('footer_navigation')}</Title>
              <Item href={INTERNAL_ROUTES.BUSINESS_PARTNERS}>
                {t('footer_navigation_business_partners')}
              </Item>
              <Item href={INTERNAL_ROUTES.SUPPORT}>
                {t('footer_navigation_support')}
              </Item>
            </Box>
            <Box>
              <Title>{t('footer_naitec_app')}</Title>
              <Item href={EXTERNAL_ROUTES.IOS} isExternal>
                {t('footer_naitec_app_ios')}
              </Item>
              <Item href={EXTERNAL_ROUTES.ANDROID} isExternal>
                {t('footer_naitec_app_android')}
              </Item>
            </Box>
            <Box>
              <Title>{t('footer_contact')}</Title>
              <Item href={`mailto:${EMAILS.CONTACT}`}>{EMAILS.CONTACT}</Item>
              <Item href={`tel:${PHONE_NUMBERS.CONTACT}`}>
                {PHONE_NUMBERS.CONTACT}
              </Item>
            </Box>
            <Box>
              <Title>{t('footer_invoice')}</Title>
              <Text
                color="text.inverted"
                opacity={0.75}
                fontWeight={600}
                fontSize={{ base: rem(18) }}
                mb={rem(30)}
                textAlign={{ base: 'left' }}
                transition="all .3s ease"
              >
                ACEA s.r.o.
              </Text>
              <Text
                color="text.inverted"
                opacity={0.75}
                fontWeight={600}
                fontSize={{ base: rem(18) }}
                mb={rem(30)}
                textAlign={{ base: 'left' }}
                transition="all .3s ease"
              >
                Hany Meličkovej 2991/24
              </Text>
              <Text
                color="text.inverted"
                opacity={0.75}
                fontWeight={600}
                fontSize={{ base: rem(18) }}
                mb={rem(30)}
                textAlign={{ base: 'left' }}
                transition="all .3s ease"
              >
                Bratislava 841 05
              </Text>
              <Text
                color="text.inverted"
                opacity={0.75}
                fontWeight={600}
                fontSize={{ base: rem(18) }}
                mb={rem(30)}
                textAlign={{ base: 'left' }}
                transition="all .3s ease"
              >
                Slovensko
              </Text>
            </Box>
          </Flex>
          <Flex
            border="2px solid"
            borderColor="white"
            borderRadius="50%"
            cursor="pointer"
            marginLeft="auto"
            width={rem(50)}
            minW={rem(50)}
            height={rem(50)}
            justifyContent="center"
            alignItems="center"
            onClick={scrollTop}
            sx={{
              _hover: { '.arrow-wrapper': { transform: 'translateY(-4px)' } },
            }}
          >
            <Box className="arrow-wrapper" transition="all .3s ease-out">
              <ArrowUp />
            </Box>
          </Flex>
        </Flex>
        <Flex
          justifyContent={{ base: 'center', md: 'space-between' }}
          borderTop="1px solid"
          borderColor="rgba(123, 123, 123, .25)"
          userSelect="none"
        >
          <Box pt={rem(28)}>
            <NeueHaasGroteskDisplay
              fontSize={rem(12)}
              color="text.inverted"
              fontWeight={300}
              opacity={0.7}
              textAlign={{ base: 'center', md: 'left' }}
            >
              ACEA s.r.o. © {currentYear}
            </NeueHaasGroteskDisplay>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
