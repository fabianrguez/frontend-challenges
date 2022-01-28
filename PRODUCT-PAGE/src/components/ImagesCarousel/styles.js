import styled from 'styled-components';

export const StyledCarouselWrapper = styled.div`
  display: none;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: flex;
  }
`;

export const StyledCarouselContent = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
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

export const StyledCarouselNavigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  padding: 0 1rem;
  transform: translateY(-50%);
`;

export const StyledNavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};
  outline: none;

  &:hover {
    & svg > * {
      stroke: ${({ theme }) => theme.orange};
    }
  }
`;
