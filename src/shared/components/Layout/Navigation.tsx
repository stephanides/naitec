import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Grid,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { rem } from 'polished';
import { useRouter } from 'next/router';
import { LocaleSwitch } from '../LocaleSwitch';

export const SOCIAL_LINKS = {
  fb: '/',
  ig: '/',
  in: '/',
};

type NavigationProps = {
  toggleMobile: () => void;
  dark?: boolean;
};

const NavItem = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={400}
      fontSize={rem(18)}
      lineHeight={rem(20)}
      color="text.primary"
      cursor="pointer"
      textAlign="center"
      transition="all .1s ease-out"
      _hover={{
        color: 'text.secondary',
      }}
    >
      {children}
    </Text>
  );
};

export const Navigation = ({ toggleMobile, dark = false }: NavigationProps) => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check on component mount
    const initialScrollPosition = window.scrollY;
    if (initialScrollPosition > 100) {
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
        position="fixed"
        top={0}
        zIndex={99}
        display={{ base: 'none', lg: 'block' }}
        width="100%"
        transition="all .3s ease-out"
        background="white"
        borderBottom="1px solid"
        borderColor="border.grey"
      >
        <LocaleSwitch />
        <Link href="/contact">kontakt</Link>
      </Box>
    </>
  );
};
