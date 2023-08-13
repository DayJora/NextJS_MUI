import { createTheme } from '@mui/material/styles';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  weight: ['500', '600'],
  style: ['normal'],
  subsets: ['cyrillic'],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    error: {
      main: '#F71735',
    },
    info: {
      main: '#0075FF',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: manrope.style.fontFamily,
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#F9F9FC',
          opacity: 0.7,
          textTransform: 'none',
          minHeight: 25,
          minWidth: 0,

          '&.Mui-selected': {
            color: '#fff',
            opacity: 1,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 25,
        },
        flexContainer: {
          gap: 20,
        },
        indicator: {
          backgroundColor: '#F71735',
          height: 3,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          color: 'white',
          fontSize: 14,
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 5,
          '&.MuiButton-outlinedPrimary': {
            borderColor: 'rgba(255,255,255,0.2)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: '100%',
          backgroundColor: 'rgba(171, 168, 178, 0.5)',
          height: 0.5,
        },
      },
    },
  },
});
