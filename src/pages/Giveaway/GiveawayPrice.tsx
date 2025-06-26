import { NeueHaasGroteskDisplay } from '@/src/shared/components';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { rem } from 'polished';
import { useInView } from 'react-intersection-observer';

export const GiveawayPrice = ({
  title,
  image,
  subtitle,
}: {
  title: string;
  image: string;
  subtitle: string;
}) => {
  const { ref: itemView, inView: itemInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <Box
      role="group"
      ref={itemView}
      opacity={itemInView ? 1 : 0}
      transform={itemInView ? 'translateY(0)' : 'translateY(60px)'}
      transition="all 1s ease-out"
    >
      <Flex justifyContent="center" w="100%">
        <Box
          position="relative"
          borderRadius={rem(20)}
          overflow="hidden"
          w="100%"
          maxW={{ base: rem(400), lg: '100%' }}
        >
          <Image
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              transition: 'transform 0.3s ease-in-out',
            }}
            alt={title}
          />
        </Box>
      </Flex>
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(22), xs: rem(28), md: rem(40) }}
        color="text.link"
        fontWeight={600}
        mt={{ base: rem(16), xs: rem(30) }}
        textAlign="center"
      >
        {title}
      </NeueHaasGroteskDisplay>
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(14), xs: rem(16), md: rem(18) }}
        color="#4F9CC2"
        fontWeight={600}
        mt={rem(4)}
        textAlign="center"
      >
        {subtitle}
      </NeueHaasGroteskDisplay>
    </Box>
  );
};
