import { createTheme } from '@mui/material/styles';
import './index.css';

const THEME_COLOR_BLACK = {
  10: 'rgba(0, 0, 0, 0.1)',
  20: 'rgba(0, 0, 0, 0.2)',
  40: 'rgba(0, 0, 0, 0.4)',
  60: 'rgba(0, 0, 0, 0.6)',
  100: 'rgba(0, 0, 0, 1)',
} as const;

const lightGray = '#F0F0F0';
const gray = '#F0EEED';

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