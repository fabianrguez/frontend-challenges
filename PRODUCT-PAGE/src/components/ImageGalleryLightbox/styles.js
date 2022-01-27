import styled from 'styled-components';

export const StyledLightboxWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.black75};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const StyledLightboxContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 12rem;
  position: relative;
`;

export const StyledLightboxCloseButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;

  & svg > * {
    fill: ${({ theme }) => theme.white};
  }

  &:hover {
    & svg > * {
      fill: ${({ theme }) => theme.orange};
    }
  }
`;

export const StyledLightboxImages = styled.div`
  display: flex;
  align-items: center;
  height: 32rem;
  width: 32rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledLightboxCarousel = styled.div`
  position: relative;
`;

export const StyledLightboxButtonPrev = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-2rem, -50%);
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};

  &:hover {
    & svg > * {
      stroke: ${({ theme }) => theme.orange};
    }
  }
`;

export const StyledLightboxButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(2rem, -50%);
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};

  &:hover {
    & svg > * {
      stroke: ${({ theme }) => theme.orange};
    }
  }
`;

export const StyledLightboxImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  flex-shrink: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

export const StyledLightboxThumbnails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const StyledLightboxThumbnailWrapper = styled.a`
  flex: 1;
  height: 4.5rem;
  border-radius: 12px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ isActive, theme }) => (isActive ? theme.orange : 'transparent')};
  background: ${({ isActive, theme }) => (isActive ? theme.white : 'transparent')};
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    opacity: ${({ isActive }) => (isActive ? 0.2 : 1)};
    transition: all 0.3s;
  }

  &:hover {
    & img {
      transform: scale(1.2);
    }
  }
`;
