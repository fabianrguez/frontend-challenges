import { App } from 'App';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.querySelector('#app')
);
