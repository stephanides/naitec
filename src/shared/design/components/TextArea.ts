import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { rem } from 'polished';

const custom = defineStyle({
  border: '1px solid',
  borderRadius: '10px',
  borderColor: 'background.naitec_blue',
  background: 'background.naitec_blue',
  color: 'white',
  py: rem(18),
  px: { base: rem(18), lg: rem(24) },
  fontFamily: '"neue-haas-grotesk-text",sans-serif',
  fontSize: { base: '10px', xs: '12px', lg: '16px' },
  _placeholder: {
    color: '#C1C1C1',
    opacity: 1,
    fontSize: { base: '10px', xs: '12px', lg: '16px' },
  },
  _invalid: {
    borderColor: 'red',
  },
  _placeholderShown: {
    border: '1px solid',
    borderColor: '#ABABAB',
    background: 'white',
    borderRadius: '10px',
    color: 'black',
    fontSize: { base: '10px', xs: '12px', lg: '16px' },
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { custom },
});
