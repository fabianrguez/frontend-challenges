import styled from 'styled-components';

export const StyledProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    padding: 0 1.75rem;
  }
`;

export const StyledProductInfoBrand = styled.h2`
  font-size: 13px;
  color: ${({ theme }) => theme.orange};
  text-transform: uppercase;
  letter-spacing: 1.75px;
`;

export const StyledProductInfoName = styled.h1`
  font-size: 38px;
  font-weight: 700;
  margin-top: 1.5rem;
`;

export const StyledProductInfoDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 2rem;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

export const StyledProductInfoPriceWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const StyledProductInfoPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledProductInfoDiscountPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledProductInfoPrice = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 1.75px;
`;

export const StyledProductInfoOriginalPrice = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.grayfishBlue};
  margin-top: 0.75rem;
  text-decoration: line-through;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-top: 0;
  }
`;

export const StyledProductInfoDiscount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  padding: 0.35rem;
  background: ${({ theme }) => theme.paleOrange};
  border-radius: 5px;
  color: ${({ theme }) => theme.orange};
  font-size: 14px;
  font-weight: 700;
`;

export const StyledProductInfoAddToCartWrapper = styled.div`
  display: flex;
  margin-top: 1.25rem;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    flex-direction: column;
  }
`;

export const StyledProductInfoAddToCartButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  background: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3;

  &:hover {
    opacity: 0.5;
  }

  & svg > * {
    fill: ${({ theme }) => theme.white};
  }
`;
