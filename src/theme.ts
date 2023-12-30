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
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      letterSpacing: '-4%',
    },
    h1: {
      color: THEME_COLOR_BLACK[100],
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '64px',
      fontStyle: 'normal',
      fontWeight: '400',
      letterSpacing: '-1.28px',
      lineHeight: '64px',

      '@media (max-width:390px)': {
        fontSize: '36px',
        letterSpacing: '-0.72px',
        lineHeight: '34px',
      },
    },
    h2: {
      color: THEME_COLOR_BLACK[100],
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: '400',
      letterSpacing: '-0.96px',
      lineHeight: 'normal',

      '@media (max-width:390px)': {
        fontSize: '32px',
        letterSpacing: '-0.64px',
        lineHeight: '36px',
      },
    },
    h3: {
      color: THEME_COLOR_BLACK[100],
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '40px',
      fontStyle: 'normal',
      fontWeight: '400',
      letterSpacing: '-0.8px',
      lineHeight: 'normal',

      '@media (max-width:390px)': {
        fontSize: '24px',
        letterSpacing: '-0.48px',
        lineHeight: '28px',
      },
    },
    h4: {
      color: THEME_COLOR_BLACK[100],
      fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(','),
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '-1.28px',
      lineHeight: 'normal',

      '@media (max-width:390px)': {
        fontSize: '24px',
        letterSpacing: '-0.96px',
      },
    },
    h5: {
      color: THEME_COLOR_BLACK[100],
      fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(','),
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '-0.96px',
      lineHeight: 'normal',

      '@media (max-width:390px)': {
        fontSize: '20px',
        letterSpacing: '-0.8px',
      },
    },
    h6: {
      color: THEME_COLOR_BLACK[100],
      fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(','),
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '-0.8px',
      lineHeight: 'normal',
    },
    /**
     * Use this only for product names in card mode & in the cart and for customer's name in reviews.
     * When using note that lineHeight property is not defined here!
     */
    subtitle1: {
      color: THEME_COLOR_BLACK[100],
      fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(','),
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '600',
      letterSpacing: '-0.8px',

      '@media (max-width:390px)': {
        fontSize: '16px',
        letterSpacing: '-0.64px',
      },
    },
    /**
     * Use this only for descriptions and review text.
     */
    body1: {
      color: THEME_COLOR_BLACK[60],
      fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(','),
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '300',
      letterSpacing: '-0.64px',
      lineHeight: '22px',

      '@media (max-width:390px)': {
        fontSize: '14px',
        letterSpacing: '-0.56px',
        lineHeight: '20px',
      },
    }
  },
});


export default theme;