import styled from 'styled-components';

export const StyledCarouselWrapper = styled.section`
  display: none;
  flex-direction: row;
  align-items: center;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: flex;
  }
`;

export const StyledCarouselItem = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  height: 22rem;
  width: 100%;
  overflow: hidden;

  & img {
    height: auto;
    width: 100%;
  }
`;
