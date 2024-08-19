import { alertAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

// 👇 Defining styles for the first custom variant
const customSuccess = definePartsStyle({
  container: {
    borderColor: 'background.green',
    background: 'background.green',
    color: 'white',
    _dark: {
      borderColor: 'background.green',
      background: 'background.green',
    },
  },
  title: {
    color: 'white',
    _dark: {
      color: 'white',
    },
  },
  icon: {
    color: 'white',
  },
});

export const alertTheme = defineMultiStyleConfig({
  variants: { customSuccess },
});
