import React from 'react';
import { GlobalStyles } from '@/styles/global-styles';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';




const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
