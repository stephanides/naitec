import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { rem } from 'polished';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const rounded = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'background.secondary',
    background: 'white',
    borderRadius: '0px',
    _invalid: {
      borderColor: 'red',
    },
  },
});

const normal = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'background.naitec_blue',
    background: 'background.naitec_blue',
    borderRadius: '10px',
    color: 'white',
    height: { base: '42px', lg: '65px' },
    fontSize: { base: '10px', xs: '12px', lg: '16px' },
    px: { base: rem(18), lg: rem(24) },
    fontFamily: '"neue-haas-grotesk-text",sans-serif',
    _invalid: {
      borderColor: 'red',
    },
    _placeholder: {
      color: '#C1C1C1',
      fontSize: { base: '10px', xs: '12px', lg: '16px' },
    },
    _placeholderShown: {
      border: '1px solid',
      borderColor: '#ABABAB',
      background: 'white',
      borderRadius: '10px',
      height: { base: '42px', lg: '65px' },
      fontSize: { base: '10px', xs: '12px', lg: '16px' },
      color: '#C1C1C1',
      px: { base: rem(18), lg: rem(24) },
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { rounded, normal },
});
