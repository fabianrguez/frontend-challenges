import styled from 'styled-components';

export const StyledTimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 8rem;
  color: ${({ theme }) => theme.colors.primary.softRed};
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.neutral.veryDarkBlue};
    border-radius: 50%;
    top: 36%;
    z-index: 3;
  }

  &::before {
    left: -5px;
  }

  &::after {
    right: -5px;
  }
`;

export const StyledTimerTime = styled.span`
  display: flex;
  place-content: center;
  padding: 1rem 0;
  font-size: 4rem;
  position: relative;
  min-width: 100%;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 50%;
    opacity: 0.2;
    position: absolute;
  }

  &::before {
    background: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
    left: 0;
    top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &::after {
    left: 0;
    top: 50%;
    background: ${({ theme }) => theme.colors.primary.grayfishBlue};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0px 7px 0 0 #111111;
  }
`;

export const StyledTimerLabel = styled.h3`
  margin-top: 1rem;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.primary.grayfishBlue};
`;
