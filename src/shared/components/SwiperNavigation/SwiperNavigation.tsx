import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { rem } from 'polished';
import { ArrowRight } from '../../design';
import { NeueHaasGroteskDisplay } from '../Typography';

interface SwiperNavigationProps extends FlexProps {
  prevClassName: string;
  nextClassName: string;
  activeIndex?: number;
  totalItems?: number;
  light?: boolean;
}

export const SwiperNavigation = ({
  prevClassName,
  nextClassName,
  activeIndex,
  totalItems,
  light = false,
  ...rest
}: SwiperNavigationProps) => {
  return (
    <Flex
      columnGap={rem(10)}
      position="relative"
      alignItems="center"
      {...rest}
      sx={{ '.swiper-button-disabled': { opacity: 0.5 } }}
    >
      {typeof activeIndex === 'number' && typeof totalItems === 'number' && (
        <Flex
          sx={{ strong: { color: light ? 'white' : 'text.link' } }}
          userSelect="none"
          minW={rem(40)}
          fontSize={rem(24)}
          mr={rem(20)}
        >
          <NeueHaasGroteskDisplay
            color={light ? 'rgba(255,255,255,.5)' : 'rgba(57,57,57,.5)'}
          >
            <strong>{activeIndex + 1}</strong> / {totalItems}
          </NeueHaasGroteskDisplay>
        </Flex>
      )}
      <Box className={prevClassName} cursor="pointer">
        <Flex
          borderRadius="50%"
          w={rem(50)}
          height={rem(50)}
          borderColor={light ? 'white !important' : 'text.link !important'}
          transform="rotate(180deg)"
          border="2px solid"
          justifyContent="center"
          alignItems="center"
        >
          <ArrowRight color={light ? 'white' : '#393939'} />
        </Flex>
      </Box>
      <Box className={nextClassName} cursor="pointer">
        <Flex
          borderRadius="50%"
          w={rem(50)}
          height={rem(50)}
          borderColor={light ? 'white !important' : 'text.link !important'}
          border="2px solid"
          justifyContent="center"
          alignItems="center"
        >
          <ArrowRight color={light ? 'white' : '#393939'} />
        </Flex>
      </Box>
    </Flex>
  );
};
