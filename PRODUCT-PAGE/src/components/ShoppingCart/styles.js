import styled from 'styled-components';

export const StyledShoppingCartWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const StyledShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(40px)' : 'translateY(-1rem)')} translateX(100px);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  right: 50%;
  background: ${({ theme }) => theme.white};
  width: 400px;
  min-height: 200px;
  height: max-content;
  z-index: 2;
  border-radius: 8px;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: calc(100vw - 1rem);
    margin: 0.5rem;
    right: 0;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(40px)' : 'translateY(-1rem)')} translateX(91px);
  }
`;

export const StyledShoppingCartHeader = styled.header`
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 20px;
    padding: 1rem;
  }

  &::after {
    content: '';
    display: inline-flex;
    border-bottom-color: ${({ theme }) => theme.grayfishBlue};
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
`;

export const StyledShoppingCartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.75rem 1.5rem;
`;

export const StyledCartEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: 700;
  color: ${({ theme }) => theme.darkGrayfishBlue};
`;

export const StyledCartProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const StyledCartProductWrapper = styled.div`
  display: flex;
  padding: 0.5rem 0;
  width: 100%;
`;

export const StyledCartProductImageWrapper = styled.div`
  flex: 1;
  height: 4rem;
  border-radius: 6px;

  & img {
    height: 100%;
    width: auto;
    border-radius: inherit;
  }
`;

export const StyledCartProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.darkGrayfishBlue};
`;

export const StyledCartProductTotalPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.black};
`;

export const StyledCartProductDeleteButton = styled.button`
  flex: 1;
`;

export const StyledCheckoutButton = styled.button`
  background: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};
  text-transform: capitalize;
  flex: 1;
  max-height: 45px;
  min-height: 45px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.01);
  }
`;

export const StyledCartBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 70%;
  left: 60%;
  background: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};
  height: 0.75rem;
  width: 1rem;
  border-radius: 50%;
  font-size: 10px;
  opacity: ${({ visible }) => (!visible ? 0 : 1)};
  visibility: ${({ visible }) => (!visible ? 'hidden' : 'visible')};
  transition: all 0.3s;
`;
