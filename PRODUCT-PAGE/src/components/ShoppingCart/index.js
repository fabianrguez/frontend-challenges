import { ReactComponent as CartIcon } from 'assets/images/icon-cart.svg';
import { useShoppingCart } from 'hooks/useShoppingCart';
import {
  StyledShoppingCartWrapper,
  StyledShoppingCartContainer,
  StyledShoppingCartHeader,
  StyledShoppingCartContent,
  StyledCartEmpty,
  StyledCheckoutButton,
  StyledCartProducts,
  StyledCartProductWrapper,
  StyledCartProductImageWrapper,
  StyledCartProductDetails,
  StyledCartProductTotalPrice,
} from './styles';
import Product1Thumbnail from 'assets/images/image-product-1-thumbnail.jpg';

export const ShoppingCart = () => {
  const { shoppingCart, isCartOpen, toggleCart } = useShoppingCart();

  const handleBlurCart = (e) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      if (isCartOpen) {
        // toggleCart();
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
                <StyledCartProductWrapper>
                  <StyledCartProductImageWrapper>
                    <img src={Product1Thumbnail} alt="" />
                  </StyledCartProductImageWrapper>
                  <StyledCartProductDetails>
                    <p>{product.name}</p>
                    <p>
                      <span>${product.price}</span> x&nbsp;
                      <span>
                        {product.units}{' '}
                        <StyledCartProductTotalPrice>${product.price * product.units}</StyledCartProductTotalPrice>
                      </span>
                    </p>
                  </StyledCartProductDetails>
                </StyledCartProductWrapper>
              ))}
            </StyledCartProducts>
          )}
          {shoppingCart?.items.length > 0 && <StyledCheckoutButton>Checkout</StyledCheckoutButton>}
        </StyledShoppingCartContent>
      </StyledShoppingCartContainer>
    </StyledShoppingCartWrapper>
  );
};
