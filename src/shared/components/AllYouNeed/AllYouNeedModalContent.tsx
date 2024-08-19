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
    <Box py={rem(80)} px={rem(100)}>
      {icon}
      <NeueHaasGroteskDisplay
        fontSize={rem(48)}
        fontWeight={600}
        mt={rem(20)}
        color="text.link"
      >
        {title}
      </NeueHaasGroteskDisplay>
      <NeueHaasGroteskDisplay
        fontSize={rem(24)}
        fontWeight={600}
        mt={rem(35)}
        mb={rem(80)}
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
