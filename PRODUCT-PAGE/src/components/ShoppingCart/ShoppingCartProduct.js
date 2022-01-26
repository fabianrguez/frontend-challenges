import { ReactComponent as DeleteIcon } from 'assets/images/icon-delete.svg';
import {
  StyledCartProductDeleteButton,
  StyledCartProductDetails,
  StyledCartProductImageWrapper,
  StyledCartProductTotalPrice,
  StyledCartProductWrapper
} from './styles';

export const ShoppingCartProduct = ({ image, name, price, units }) => {
  return (
    <StyledCartProductWrapper>
      <StyledCartProductImageWrapper>
        <img src={image} alt="" />
      </StyledCartProductImageWrapper>
      <StyledCartProductDetails>
        <p>{name}</p>
        <p>
          <span>${price}</span> x{' '}
          <span>
            {units} <StyledCartProductTotalPrice>${price * units}</StyledCartProductTotalPrice>
          </span>
        </p>
      </StyledCartProductDetails>
      <StyledCartProductDeleteButton title="Delete">
        <DeleteIcon />
      </StyledCartProductDeleteButton>
    </StyledCartProductWrapper>
  );
};
