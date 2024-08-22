import { Box } from '@chakra-ui/react';
import { rem } from 'polished';
import { ReactNode } from 'react';
import { NeueHaasGroteskDisplay } from '../Typography';
import Image from 'next/image';

type AllYouNeedModalContentProps = {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
};

export const AllYouNeedModalContent = ({
  title,
  description,
  icon,
  image,
}: AllYouNeedModalContentProps) => {
  return (
    <Box
      pt={{ base: rem(36), lg: rem(80) }}
      pb={{ base: rem(16), lg: rem(80) }}
      px={{ base: rem(16), md: rem(24), xl: rem(100) }}
    >
      {icon}
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(22), md: rem(36), lg: rem(48) }}
        fontWeight={600}
        mt={rem(20)}
        color="text.link"
      >
        {title}
      </NeueHaasGroteskDisplay>
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(14), md: rem(20), lg: rem(24) }}
        fontWeight={600}
        mt={{ base: rem(15), lg: rem(35) }}
        mb={{ base: rem(40), lg: rem(80) }}
        maxW={rem(899)}
        color="text.light"
        sx={{ strong: { color: 'text.link' } }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Image
        src={image}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
        alt={title}
      />
    </Box>
  );
};
