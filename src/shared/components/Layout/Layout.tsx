import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Box, useOutsideClick } from '@chakra-ui/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { NavMenuContent } from './NavMenuContent';
import { rem } from 'polished';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuContentRef = useRef(null);
  const { children } = props;

  const toggleMobile = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    // Toggle overflow on body when isMobileMenuOpen changes
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  useOutsideClick({
    ref: menuContentRef,
    handler: () => setIsMobileMenuOpen(false),
  });

  return (
    <main>
      <Box style={{ minHeight: '50vh' }}>
        <Navigation toggleMobile={toggleMobile} />
        <Box mt={{ base: rem(80), md: rem(92), lg: rem(98) }}>{children}</Box>
        <Footer />
        <NavMenuContent
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          toggleMobile={toggleMobile}
          menuContentRef={menuContentRef}
        />
      </Box>
    </main>
  );
};
