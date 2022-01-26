import { ReactComponent as CartIcon } from 'assets/images/icon-cart.svg';
import { useShoppingCart } from 'hooks/useShoppingCart';
import { ShoppingCartProduct } from './ShoppingCartProduct';
import {
  StyledCartEmpty,
  StyledCartProducts,
  StyledCheckoutButton,
  StyledShoppingCartContainer,
  StyledShoppingCartContent,
  StyledShoppingCartHeader,
  StyledShoppingCartWrapper,
} from './styles';

export const ShoppingCart = () => {
  const { shoppingCart, isCartOpen, toggleCart } = useShoppingCart();

  const handleBlurCart = (e) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      if (isCartOpen) {
        toggleCart();
      }
    }
  };

  return (
    <StyledShoppingCartWrapper onBlur={handleBlurCart}>
      <button aria-controls="shopping-cart-content" onClick={toggleCart}>
        <CartIcon />
      </button>
      <StyledShoppingCartContainer id="shopping-cart-content" tabIndex="0" isOpen={isCartOpen}>
        <StyledShoppingCartHeader>
          <h2>Your cart</h2>
        </StyledShoppingCartHeader>
        <StyledShoppingCartContent>
          {shoppingCart?.items.length === 0 ? (
            <StyledCartEmpty>Your cart is empty</StyledCartEmpty>
          ) : (
            <StyledCartProducts>
              {shoppingCart?.items.map((product) => (
                <ShoppingCartProduct {...product} />
              ))}
            </StyledCartProducts>
          )}
          {shoppingCart?.items.length > 0 && <StyledCheckoutButton>Checkout</StyledCheckoutButton>}
        </StyledShoppingCartContent>
      </StyledShoppingCartContainer>
    </StyledShoppingCartWrapper>
  );
};
