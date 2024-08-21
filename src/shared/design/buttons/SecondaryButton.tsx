import {
  Box,
  Button,
  ButtonProps as BaseButtonProps,
  Flex,
} from '@chakra-ui/react';
import { rem } from 'polished';
import { ReactNode } from 'react';
import { NeueHaasGroteskDisplay } from '../../components';
import { colors } from '../colors';

interface ButtonProps extends BaseButtonProps {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  startWithIcon?: boolean;
  color?: string;
  hoverColor?: string;
  iconWidth?: number;
  mobileIconWidth?: number;
  trasnformIcon?: {
    initialState: string;
    hoverState: string;
  };
}

export const SecondaryButton = ({
  children,
  icon,
  disabled,
  startWithIcon = false,
  color = colors.naitec_blue,
  hoverColor = 'background.naitec_blue_hover',
  iconWidth = 20,
  mobileIconWidth = 12,
  trasnformIcon,
  ...rest
}: ButtonProps) => (
  <Button
    fontWeight={700}
    fontSize={{ base: rem(12), xs: rem(20) }}
    color={color}
    borderRadius={rem(60)}
    border="2px solid"
    borderColor={color}
    background="transparent"
    px={{ base: rem(12), xs: rem(36) }}
    py={{ base: rem(10), xs: rem(18) }}
    height={{ base: rem(34), xs: rem(60) }}
    transition="all .3s ease-out"
    _disabled={{
      border: '2px solid',
      color: 'text.disabled',
      pointerEvents: 'none',
      borderColor: 'border.grey',
      opacity: 0.75,
    }}
    sx={{
      _hover: {
        '.icon': {
          transform: trasnformIcon ? trasnformIcon.hoverState : 'none',
          path: { stroke: 'white' },
        },
        backgroundColor: hoverColor,
        borderColor: hoverColor,
        color: 'white',
      },
      '.icon': {
        transform: trasnformIcon ? trasnformIcon.initialState : 'none',
        transition: 'all .3s ease-out',
        path: { transition: 'all .3s ease-out' },
      },
    }}
    {...rest}
  >
    <Flex alignItems="center" columnGap={rem(8)} position="relative">
      {startWithIcon && icon && (
        <Box width={{ base: rem(mobileIconWidth), md: rem(iconWidth) }}>
          {icon}
        </Box>
      )}
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(12), xs: rem(18) }}
        lineHeight={rem(22)}
      >
        {children}
      </NeueHaasGroteskDisplay>
      {!startWithIcon && icon && (
        <Box
          width={{ base: rem(mobileIconWidth), md: rem(iconWidth) }}
          className="icon"
          sx={{ path: { stroke: color } }}
        >
          {icon}
        </Box>
      )}
    </Flex>
  </Button>
);
