import { ADD_TO_CART, DELETE_FROM_CART } from 'context/shoppingCart/actions';
import { useShoppingCartContext } from 'context/shoppingCart/ShopingCartProvider';
import { useState } from 'react';

export function useShoppingCart() {
  const [shoppingCart, dispatch] = useShoppingCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => dispatch({ type: ADD_TO_CART, payload: product });

  const deleteFromCart = (productId) => dispatch({ type: DELETE_FROM_CART, payload: productId });

  return {
    isCartOpen,
    shoppingCart,
    toggleCart,
    addToCart,
    deleteFromCart,
  };
}
