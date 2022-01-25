import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  position: relative;

  &::after {
    content: '';
    display: inline-flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.grayfishBlue};

    @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
      display: none;
    }
  }
`;

export const StyledLogoWrapper = styled.div``;

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    flex-direction: column;
    z-index: 2;
    position: fixed;
    top: 0;
    height: 100%;
    align-items: flex-start;
    left: 0;
    background: ${({ theme }) => theme.white};
    width: 50%;
    padding: 1rem;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-200%')});
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  margin: 0 2rem;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  }
`;

export const StyledNavItem = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;
  border-bottom-style: dashed;
  border-bottom-color: transparent;

  &::after {
    content: '';
    width: 0;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    transition: all 0.4s;
  }

  &:hover {
    color: ${({ theme }) => theme.black};

    &::after {
      width: 100%;
      border-bottom-color: ${({ theme }) => theme.orange};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    font-weight: 700;
  }
`;

export const StyledExtraWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 1rem;
`;

export const StyledAvatarWrapper = styled.div`
  width: 3rem;
  height: 100%;
  margin-left: 1rem;

  & img {
    width: 100%;
    height: auto;
  }
`;

export const StyledMobileToggler = styled.button`
  display: none;
  margin-right: 0.75rem;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: block;
  }
`;
