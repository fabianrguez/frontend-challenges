import { shoppingCartReducer, initialState } from 'context/shoppingCart/reducer';
import { ShoppingCartProvider } from 'context/shoppingCart/ShopingCartProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { GlobalStyles } from './GlobalStyles';

const theme = {
  orange: 'hsl(26, 100%, 55%)',
  paleOrange: 'hsl(25, 100%, 94%)',
  veryDarkBlue: 'hsl(220, 13%, 13%)',
  darkGrayfishBlue: 'hsl(219, 9%, 45%)',
  grayfishBlue: 'hsl(220, 14%, 75%)',
  lightGrayfishBlue: 'hsl(223, 64%, 98%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  black75: 'rgba(0, 0, 0, 0.75)',
  fontFamily: "'Kumbh Sans', sans-serif",
  mobileBreakpoint: '500px',
  tabletBreakpoint: '1080px',
  mediumDesktopBreakpoint: '1200px',
  largeDesktopBreakpoint: '1440px',
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShoppingCartProvider reducer={shoppingCartReducer} initialState={initialState}>
        <App />
      </ShoppingCartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector('#app')
);
