import { rem } from 'polished';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { useCollapse } from 'react-collapsed';

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
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <Box
      px={{ base: rem(22), md: rem(56) }}
      zIndex={1000}
      background="white"
      width="100%"
      height="100vh"
      position="fixed"
      top={0}
      transition=" all 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895)"
      right={isOpen ? 0 : '-100%'}
      pointerEvents="all"
      ref={menuContentRef}
    ></Box>
  );
};
