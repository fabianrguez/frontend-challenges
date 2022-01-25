import { useShoppingCartContext } from 'context/shoppingCart/ShopingCartProvider';
import { useState } from 'react';

export function useShoppingCart() {
  const [shoppingCart] = useShoppingCartContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return {
    isCartOpen,
    shoppingCart,
    toggleCart,
  };
}
