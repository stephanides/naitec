import { Minus, Plus } from '@/src/shared/design';
import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { ReactNode, useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { NeueHaasGroteskDisplay } from '../Typography';

type CollapsibleItemProps = {
  title: string;
  text: ReactNode;
};

export const CollapsibleItem = ({ title, text }: CollapsibleItemProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <Box width="100%" borderBottom="1px solid" borderColor="border.grey">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        py={rem(25)}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <NeueHaasGroteskDisplay
          fontSize={rem(20)}
          lineHeight={rem(36)}
          fontWeight={600}
          color="text.naitec_blue"
          userSelect="none"
        >
          {title}
        </NeueHaasGroteskDisplay>
        <Box p={rem(2)} transition="all .3s ease-out">
          {isExpanded ? <Minus /> : <Plus />}
        </Box>
      </Flex>
      <Box {...getCollapseProps()} userSelect="none">
        {text}
        <Box height={rem(25)} />
      </Box>
    </Box>
  );
};
