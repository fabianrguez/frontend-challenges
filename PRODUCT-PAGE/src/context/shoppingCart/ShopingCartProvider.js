import { createContext, useContext, useReducer } from 'react';

const ShoppingContext = createContext();

const useShoppingCartContext = () => useContext(ShoppingContext);

const ShoppingCartProvider = ({ reducer, initialState, children }) => (
  <ShoppingContext.Provider value={useReducer(reducer, initialState)}>{children}</ShoppingContext.Provider>
);

export { ShoppingCartProvider, useShoppingCartContext };
