import { Select, extendTheme } from '@chakra-ui/react';
import {
  alertTheme,
  checkboxTheme,
  inputTheme,
  selectTheme,
  textareaTheme,
} from './components';

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
      base: '#F2F2F2',
      primary: '#111B21',
      secondary: '#FF6E01',
      naitec_blue: '#4F9CC2',
      naitec_blue_hover: '#396E89',
      smart: '#527731',
      smart_light: '#84AC5E',
      smart_dark: '#527731',
      smart_hover: '#2A3F17',
      sensitive: '#7C3FA2',
      sensitive_light: '#8E5EAC',
      sensitive_hover: '#4D2467',
      dark: '#313131',
      stellair: '#6093AF',
      stellair_hover: '#19303D',
      sensitive_pro: '#8A2828',
      sensitive_pro_light: '#D54C4C',
      sensitive_pro_hover: '#521919',
      onyx_hover: '#2C2C2C',
      green: '#59B95D',
    },
    text: {
      primary: '#333333',
      secondary: '#7A8492',
      strong: '#EBEBEB',
      light: '#878787',
      stellair: '#344F5F',
      onyx: '#4C4C4C',
      onyx_grey: '#5A5A5A',
      inverted: '#FFF',
      link: '#393939',
      link_light: '#646464',
      link_hover: '#555555',
      naitec_blue: '#4F9CC2',
      params: '#747474',
      sensitive_pro: '#8A2828',
      smart_dark: '#527731',
    },
    label: {
      yellow: '#FFCE2E',
      orange: '#F0AA82',
      green: '#AAF0AD',
    },
    border: {
      label: '#86949C',
      white: '#FFF',
      light: '#FAFAFA',
      grey: '#CCCCCC',
    },
  },
  components: {
    Textarea: textareaTheme,
    Input: inputTheme,
    Checkbox: checkboxTheme,
    Alert: alertTheme,
    Select: selectTheme,
  },
  breakpoints,
});
