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

export const checkboxTheme = defineMultiStyleConfig({
  variants: { custom },
});
