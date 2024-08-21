import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { rem } from 'polished';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const smart = definePartsStyle({
  field: {
    border: '3px solid',
    borderColor: 'background.smart_dark',
    color: 'text.smart_dark',
    borderRadius: rem(60),
    pl: rem(18),
    pr: rem(32),
    fontWeight: 600,
    background: '#FAFAFA',
    cursor: 'pointer',
    height: { base: rem(40), md: rem(60) },
    _invalid: {
      borderColor: 'red',
    },
    _placeholder: {
      color: 'text.smart_dark',
      opacity: 0.8,
      fontSize: rem(18),
    },
  },
  icon: {
    color: 'background.smart_dark',
  },
});

export const selectTheme = defineMultiStyleConfig({
  variants: { smart },
});
