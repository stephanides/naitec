import { useEffect } from 'react';
import AOS from 'aos';
import { Box, Flex, Text, TextProps } from '@chakra-ui/react';
import { rem } from 'polished';
import { Container } from '../Container';
import { LogoLight } from '../../design';

const currentYear = new Date().getFullYear();

const Title = ({ children }: { children: string }) => (
  <Text
    color="text.primary"
    fontWeight={600}
    fontSize={{ base: rem(18), '3xl': rem(21) }}
    lineHeight={rem(30)}
    mb={rem(34)}
    textAlign={{ base: 'center', '2xl': 'left' }}
  >
    {children}
  </Text>
);

const Item = ({ children, ...rest }: { children: string } & TextProps) => (
  <Text
    color="text.primary"
    fontWeight={300}
    fontSize={{ base: rem(16), '3xl': rem(18) }}
    lineHeight={rem(22)}
    mb={rem(20)}
    textAlign={{ base: 'center', '2xl': 'left' }}
    _hover={{ color: 'text.secondary' }}
    {...rest}
  >
    {children}
  </Text>
);

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
      pt={{ base: rem(40), md: rem(100) }}
      pb={{ base: rem(40), md: rem(60) }}
    >
      <Container>
        <Flex
          justifyContent={{ base: 'space-evenly', '2xl': 'space-between' }}
          mb={{ base: rem(40), md: rem(87) }}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          rowGap={rem(20)}
        >
          <Box width={{ base: rem(190) }}>
            <LogoLight />
          </Box>
        </Flex>
        <Flex
          justifyContent={{ base: 'center', md: 'space-between' }}
          pt={rem(45)}
          borderTop="1px solid"
          borderColor="rgba(123, 123, 123, .25)"
        >
          <Box>
            <Text
              fontSize={rem(16)}
              color="text.primary"
              lineHeight={rem(28)}
              fontWeight={300}
              opacity={0.5}
              textAlign={{ base: 'center', md: 'left' }}
            >
              ACEA s.r.o. © {currentYear}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
