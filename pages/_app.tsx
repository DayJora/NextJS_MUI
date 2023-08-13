import '../styles/globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../utils/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
