import { Text, TextProps } from '@chakra-ui/react';

type TypographyProps = {
  children?: React.ReactNode;
  className?: string;
} & TextProps;

export const NeueHaasGroteskDisplay = ({
  children,
  className,
  ...rest
}: TypographyProps) => (
  <Text
    fontFamily="'neue-haas-grotesk-display',sans-serif"
    className={className}
    {...rest}
  >
    {children && children}
  </Text>
);

export const NeueHaasGroteskText = ({
  children,
  className,
  ...rest
}: TypographyProps) => (
  <Text
    fontFamily="'neue-haas-grotesk-text',sans-serif"
    className={className}
    sx={{ strong: { fontWeight: 500 } }}
    {...rest}
  >
    {children && children}
  </Text>
);

export const RobotoMono = ({
  children,
  className,
  ...rest
}: TypographyProps) => (
  <Text fontFamily="Roboto Mono" className={className} {...rest}>
    {children && children}
  </Text>
);
