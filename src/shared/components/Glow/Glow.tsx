import { Box } from '@chakra-ui/react';

type GlowProps = {
  blurOnBottom?: boolean;
};

export const Glow = ({ blurOnBottom = false }: GlowProps) => (
  <Box
    position="absolute"
    bottom={blurOnBottom ? 0 : 'unset'}
    top={blurOnBottom ? 'unset' : 0}
    left={0}
    width="100%"
    transform={blurOnBottom ? 'translateY(50%)' : 'translateY(-50%)'}
    aspectRatio="1566/660"
    background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
    borderRadius="30%"
    filter="blur(100px)"
    pointerEvents="none"
  />
);
