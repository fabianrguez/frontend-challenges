import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body, #app {
    height: 100vh;
    overflow: hidden;
  }

  #app {
    padding: 0 4rem;

    @media(max-width: ${({ theme }) => theme.mobileBreakpoint}) {
      padding: 0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, a {
    cursor: pointer;
  }

  button {
    border: 0;
    background: transparent;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.black};
  opacity: 0.6;
  z-index: 1;
`;
