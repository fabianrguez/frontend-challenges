import styled from 'styled-components';

export const StyledImageGalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: none;
  }
`;

export const StyledBigImageWrapper = styled.a`
  height: 28rem;
  width: 100%;
  border-radius: 14px;
  cursor: pointer;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    object-fit: cover;
    transition: all 0.3s;
  }

  &:hover {
    & img {
      transform: scale(1.2);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    height: 20rem;
    border-radius: 0;
  }
`;

export const StyledThumbnails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const StyledThumbnailWrapper = styled.a`
  flex: 1;
  height: 6rem;
  /* width: 6rem; */
  border-radius: 12px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ isActive, theme }) => (isActive ? theme.orange : 'transparent')};
  overflow: hidden;

  & img {
    height: auto;
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

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: none;
  }
`;

export const StyledImageGalleryContainer = styled.section`
  flex: 1;
`;
