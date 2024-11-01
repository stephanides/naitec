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
  borderColor?: string;
  hoverColor?: string;
  small?: boolean;
  trasnformIcon?: {
    initialState: string;
    hoverState: string;
  };
}

export const PrimaryButton = ({
  children,
  icon,
  disabled,
  startWithIcon = false,
  color = colors.naitec_blue,
  borderColor = colors.naitec_blue,
  hoverColor = 'background.naitec_blue_hover',
  trasnformIcon,
  small = false,
  ...rest
}: ButtonProps) => (
  <Button
    fontWeight={700}
    fontSize={{ base: rem(12), xs: small ? rem(15) : rem(20) }}
    color="text.inverted"
    borderRadius={rem(60)}
    border="2px solid"
    borderColor={borderColor}
    background={color}
    px={{ base: rem(12), xs: rem(36) }}
    py={{ base: rem(10), xs: rem(18) }}
    height={{ base: rem(34), xs: small ? rem(28) : rem(60) }}
    transition="all .3s ease-out"
    _disabled={{
      border: '2px solid',
      color: 'text.disabled',
      pointerEvents: 'none',
      borderColor: borderColor,
      opacity: 0.75,
    }}
    sx={{
      _hover: {
        '.icon': {
          transform: trasnformIcon ? trasnformIcon.hoverState : 'none',
        },
        backgroundColor: hoverColor,
        borderColor: hoverColor,
      },
      '.icon': {
        transform: trasnformIcon ? trasnformIcon.initialState : 'none',
        transition: 'all .3s ease-out',
      },
    }}
    {...rest}
  >
    <Flex alignItems="center" columnGap={rem(8)} position="relative">
      {startWithIcon && icon && (
        <Box width={{ base: rem(12), md: small ? rem(16) : rem(20) }}>
          {icon}
        </Box>
      )}
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(12), xs: small ? rem(15) : rem(18) }}
        lineHeight={rem(22)}
      >
        {children}
      </NeueHaasGroteskDisplay>
      {!startWithIcon && icon && (
        <Box
          width={{ base: rem(12), md: rem(20) }}
          position="relative"
          top={rem(1)}
          className="icon"
        >
          {icon}
        </Box>
      )}
    </Flex>
  </Button>
);
