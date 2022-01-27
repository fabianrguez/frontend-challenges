import { UnitsSelector } from 'components/UnitsSelector';
import { ReactComponent as CartIcon } from 'assets/images/icon-cart.svg';

import { formatPrice } from 'utils';
import { DiscountPrice } from './DiscountPrice';
import {
  StyledProductInfoAddToCartButton,
  StyledProductInfoAddToCartWrapper,
  StyledProductInfoBrand,
  StyledProductInfoDescription,
  StyledProductInfoName,
  StyledProductInfoPrice,
  StyledProductInfoPriceContainer,
  StyledProductInfoPriceWrapper,
  StyledProductInfoWrapper,
} from './styles';
import { useShoppingCart } from 'hooks/useShoppingCart';
import { useState } from 'react';

export const ProductInfo = ({ brand, id, name, description, price, isDiscount, discount, currency, images }) => {
  const [productUnits, setProductUnits] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleUnitsChange = (units) => {
    setProductUnits(units);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    addToCart({ id, name, price, units: productUnits, image: images.thumbnails[0] });
  };

  return (
    <StyledProductInfoWrapper>
      <StyledProductInfoBrand>{brand}</StyledProductInfoBrand>
      <StyledProductInfoName>{name}</StyledProductInfoName>
      <StyledProductInfoDescription>{description}</StyledProductInfoDescription>
      <StyledProductInfoPriceWrapper>
        <StyledProductInfoPriceContainer>
          {isDiscount ? (
            <DiscountPrice price={price} currency={currency} discount={discount} />
          ) : (
            <StyledProductInfoPrice>
              {currency}
              {formatPrice(price)}
            </StyledProductInfoPrice>
          )}
        </StyledProductInfoPriceContainer>
      </StyledProductInfoPriceWrapper>
      <StyledProductInfoAddToCartWrapper>
        <UnitsSelector onChange={handleUnitsChange} />
        <StyledProductInfoAddToCartButton onClick={handleAddProduct}>
          <CartIcon />
          Add to cart
        </StyledProductInfoAddToCartButton>
      </StyledProductInfoAddToCartWrapper>
    </StyledProductInfoWrapper>
  );
};
