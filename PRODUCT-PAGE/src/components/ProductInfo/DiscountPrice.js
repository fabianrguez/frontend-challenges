import { formatPrice } from 'utils';
import {
  StyledProductInfoDiscount,
  StyledProductInfoDiscountPriceContainer,
  StyledProductInfoOriginalPrice,
  StyledProductInfoPrice
} from './styles';

export const DiscountPrice = ({ price, currency, discount }) => {

  const getDiscountPrice = (price, _discount) => {
    const discount = (price * _discount) / 100;
    return formatPrice(price - discount);
  };

  return (
    <>
      <StyledProductInfoDiscountPriceContainer>
        <StyledProductInfoPrice>
          {currency}
          {getDiscountPrice(price, discount)}
        </StyledProductInfoPrice>
        <StyledProductInfoDiscount>{discount}%</StyledProductInfoDiscount>
      </StyledProductInfoDiscountPriceContainer>
      <StyledProductInfoOriginalPrice>
        {currency}
        {formatPrice(price)}
      </StyledProductInfoOriginalPrice>
    </>
  );
};
