import { Box } from '@chakra-ui/react';
import { rem } from 'polished';
import { RobotoMono } from '../Typography';

type LabelProps = {
  text: string;
  borderColor: string;
  color: string;
  fontSize?: number;
};

export const Label = ({
  text,
  color,
  borderColor,
  fontSize = 12,
}: LabelProps) => (
  <Box
    border="2px solid"
    borderColor={borderColor}
    borderRadius={rem(38)}
    py={rem(7)}
    px={rem(14)}
    display="inline-block"
  >
    <RobotoMono
      color={color}
      fontWeight={700}
      fontSize={rem(fontSize)}
      textTransform="uppercase"
    >
      {text}
    </RobotoMono>
  </Box>
);
