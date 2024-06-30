import { ReactNode } from 'react';
import { Container as BaseContainer } from '@chakra-ui/react';
import { rem } from 'polished';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <BaseContainer maxW={{ base: '100%', '2xl': rem(1360), '3xl': rem(1572) }}>
    {children}
  </BaseContainer>
);
