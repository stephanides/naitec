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
    height: '65px',
    px: rem(24),
    fontFamily: '"neue-haas-grotesk-text",sans-serif',
    _invalid: {
      borderColor: 'red',
    },
    _placeholder: {
      color: '#C1C1C1',
      fontSize: rem(18),
    },
    _placeholderShown: {
      border: '1px solid',
      borderColor: '#ABABAB',
      background: 'white',
      borderRadius: '10px',
      height: '65px',
      color: '#C1C1C1',
      px: rem(24),
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { rounded, normal },
});
