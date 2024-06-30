import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  base: '0px',
  sm: '320px',
  xs: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1440px',
  '3xl': '1920px',
};

export const theme = extendTheme({
  colors: {
    background: {
      primary: '#172526',
      secondary: '#FF6E01',
      tertiary: '#758A62',
      red: '#E10C26',
      grey: '#F4F4F4',
      greyLight: '#D0D0D0',
      greyDark: '#3C3C3C',
      yellow: '#FFCE2E',
      green: '#59B95D',
      success: '#43B154',
      light: '#FAFAFA',
    },
    text: {
      primary: '#333333',
      red: '#CC0000',
      secondary: '#E10C26',
      light: '#F2F2F2',
      success: '#59B95D',
      disabled: '#D3D3D3',
      inverted: '#FFF',
      green: '#3CAD00',
      yellow: '#FFCE2E',
    },
    label: {
      yellow: '#FFCE2E',
      orange: '#F0AA82',
      green: '#AAF0AD',
    },
    border: {
      grey: '#E3E3E3',
      greyDark: '#333333',
      red: '#E10C26',
      yellow: '#FFCE2E',
    },
  },
  breakpoints,
});
