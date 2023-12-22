import { createTheme } from '@mui/material/styles';
import './index.css';

export const THEME_COLOR_BLACK = {
  10: 'rgba(0, 0, 0, 0.1)',
  20: 'rgba(0, 0, 0, 0.2)',
  40: 'rgba(0, 0, 0, 0.4)',
  60: 'rgba(0, 0, 0, 0.6)',
  100: 'rgba(0, 0, 0, 1)',
} as const;
export const lightGray = '#F0F0F0';
export const gray = '#F0EEED';
export const lightRed = 'rgba(255, 51, 51, 0.1)';
export const red = '#FF3333';
export const yellow = '#FFC633';
export const white = '#FFFFFF';
export const green = '#01AB31';
export const homapageBackgroungColor = '#F2F0F1';

const theme = createTheme({
  palette: {
    primary: {
      light: THEME_COLOR_BLACK[60],
      main: THEME_COLOR_BLACK[100],
    },
    secondary: {
      light: lightGray,
      main: gray,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Satoshi',
    },
    h1: {
      fontFamily: 'IntegralCF-Bold',
    },
    h2: {
      fontFamily: 'IntegralCF-Bold',
    },
    h3: {
      fontFamily: 'IntegralCF-Bold',
    },
  },
  spacing: 2,
});


export default theme;