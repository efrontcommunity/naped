import React from 'react';
import { ThemeProvider } from 'styled-components';

// Styled Components
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
