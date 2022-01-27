import { ReactComponent as DeleteIcon } from 'assets/images/icon-delete.svg';
import { useShoppingCart } from 'hooks/useShoppingCart';
import { loadImage } from 'utils';
import {
  StyledCartProductDeleteButton,
  StyledCartProductDetails,
  StyledCartProductImageWrapper,
  StyledCartProductTotalPrice,
  StyledCartProductWrapper,
} from './styles';

export const ShoppingCartProduct = ({ image, name, price, units, id }) => {
  const { deleteFromCart } = useShoppingCart();

  const handleDeleteFromCart = (id) => (e) => {
    e.preventDefault();
    deleteFromCart(id);
  };

  return (
    <StyledCartProductWrapper>
      <StyledCartProductImageWrapper>
        <img src={loadImage(image)} alt={name} />
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
      <StyledCartProductDeleteButton title="Delete" onClick={handleDeleteFromCart(id)}>
        <DeleteIcon />
      </StyledCartProductDeleteButton>
    </StyledCartProductWrapper>
  );
};
