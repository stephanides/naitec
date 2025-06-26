import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { rem } from 'polished';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const custom = definePartsStyle({
  label: defineStyle({
    color: 'rgba(0,0,0,0.85)',
    fontFamily: '"neue-haas-grotesk-text",sans-serif',
    fontSize: rem(12),
  }),
  control: defineStyle({
    width: rem(15),
    height: rem(15),
    background: 'white',
    borderColor: 'background.naitec_blue',
    _hover: {
      _checked: {
        backgroundColor: 'background.naitec_blue',
        borderColor: 'background.naitec_blue',
      },
    },
    _checked: {
      backgroundColor: 'background.naitec_blue',
      borderColor: 'background.naitec_blue',
      svg: { stroke: 'background.red !important' },

      _disabled: {
        backgroundColor: 'light.200',
        borderColor: 'light.200',
      },
    },
  }),
  icon: defineStyle({
    _checked: {
      background: 'white',
    },
  }),
});

const social = definePartsStyle({
  container: defineStyle({
    justifyContent: 'space-between',
    flexDir: 'row-reverse',
    py: rem(25),
    px: { base: rem(12), lg: rem(24) },
    height: { base: '42px', lg: '65px' },
  }),
  label: defineStyle({
    color: 'rgba(0,0,0,0.85)',
    fontFamily: '"neue-haas-grotesk-text",sans-serif',
    fontSize: { base: '10px', xs: '12px', lg: '16px' },
  }),
  control: defineStyle({
    width: rem(25),
    height: rem(25),
    background: 'white',
    borderColor: '#393939',
    _hover: {
      _checked: {
        backgroundColor: 'white',
        borderColor: '#393939',
      },
    },
    _checked: {
      backgroundColor: 'white',
      borderColor: '#393939',
      svg: { stroke: '#393939 !important' },

      _disabled: {
        backgroundColor: 'light.200',
        borderColor: 'light.200',
      },
    },
  }),
  icon: defineStyle({
    _checked: {
      background: '#393939',
    },
  }),
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { custom, social },
});
