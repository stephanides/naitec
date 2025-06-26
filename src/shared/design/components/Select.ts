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

const naitec = definePartsStyle({
  field: {
    border: '3px solid',
    borderColor: 'background.naitec_blue',
    color: 'text.naitec_blue',
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
      color: 'text.naitec_blue',
      opacity: 0.8,
      fontSize: rem(18),
    },
  },
  icon: {
    color: 'background.naitec_blue',
  },
});

const normal = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'background.naitec_blue',
    background: 'background.naitec_blue',
    borderRadius: '10px',

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
  },
});

export const selectTheme = defineMultiStyleConfig({
  variants: { smart, naitec, normal },
});
