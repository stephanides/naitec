import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { rem } from 'polished';

const custom = defineStyle({
  border: '1px solid',
  borderRadius: '10px',
  borderColor: 'background.naitec_blue',
  background: 'background.naitec_blue',
  color: 'white',
  py: rem(18),
  px: rem(24),
  fontFamily: '"neue-haas-grotesk-text",sans-serif',
  _placeholder: {
    color: '#C1C1C1',
    opacity: 1,
    fontSize: rem(18),
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
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { custom },
});
