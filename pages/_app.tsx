import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import { GlobalStyle } from 'styles/global-style';
import Container from 'components/Container';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(darkTheme);

  const setMode = (mode) => {
    mode === lightTheme
      ? window.localStorage.setItem('theme', 'light')
      : window.localStorage.setItem('theme', 'dark');
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme !== null) {
      // localTheme이 존재한다면
      if (localTheme === 'dark') {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container toggleTheme={toggleTheme} theme={theme}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
