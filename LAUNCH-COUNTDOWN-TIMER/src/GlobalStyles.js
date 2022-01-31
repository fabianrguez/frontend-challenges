import { createGlobalStyle } from 'styled-components';
import BgStars from 'assets/images/bg-stars.svg';
import BgHills from 'assets/images/pattern-hills.svg';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily}
  }

  *::before, 
  *::after {
    box-sizing: inherit;
  }
  
  body, #app {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neutral.veryDarkBlueDarker};
    background-image: url(${BgStars});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    color: ${({ theme }) => theme.colors.neutral.white};
    gap: 2rem;
    z-index: 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 197px;
      width: 100%;
      background-image: url(${BgHills});
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    & {
      h1 {
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: 7px;
        text-align: center;
      }
    }
  }


`;
