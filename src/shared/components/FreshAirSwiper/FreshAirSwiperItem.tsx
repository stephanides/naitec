import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { FreshAirSwiperItemProps } from './FreshAirSwiper';
import Image from 'next/image';

export const FreshAirSwiperItem = ({
  image,
  title,
  description,
  isActive,
}: FreshAirSwiperItemProps) => {
  return (
    <Box
      position="relative"
      height="100%"
      transform={isActive ? 'scale(1.1)' : ''}
      transition="all .3s ease-in-out"
    >
      <Image
        src={image}
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          opacity: isActive ? 1 : 0.5,
          transition: 'opacity 0.3s ease-in-out',
          borderRadius: rem(20),
          userSelect: 'none',
        }}
        alt={title}
      />
      <Flex
        mt={rem(50)}
        justifyContent="space-between"
        columnGap={rem(140)}
        opacity={isActive ? 1 : 0}
        transition="opacity 0.5s ease-in-out"
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(17), md: rem(32) }}
          fontWeight={600}
          lineHeight="112%"
          color="text.link"
          width={{ base: '100%', lg: rem(300) }}
          minW={rem(300)}
          mb={{ base: rem(20), lg: 0 }}
        >
          {title}
        </NeueHaasGroteskDisplay>
        <NeueHaasGroteskText
          color="text.link"
          fontSize={{ base: rem(14), md: rem(22) }}
          fontWeight={500}
          lineHeight="130%"
          sx={{
            strong: { color: 'text.link', fontWeight: 500 },
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Flex>
    </Box>
  );
};
