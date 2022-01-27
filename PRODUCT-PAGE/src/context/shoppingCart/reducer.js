import { ADD_TO_CART, DELETE_FROM_CART } from './actions';

const initialState = {
  items: [],
  totalProducts: 0,
};

const mutateItems = (stateItems, newItem) => {
  const itemIndex = stateItems.findIndex((item) => item.id === newItem.id);
  itemIndex !== -1 ? (stateItems[itemIndex].units += newItem.units) : stateItems.push(newItem);

  return stateItems;
};

const deleteItem = (stateItems, itemIndex) => {
  stateItems.splice(itemIndex, 1);
  return stateItems;
};

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      return {
        ...state,
        items: [...mutateItems(state.items, product)],
        totalProducts: state.totalProducts + product.units,
      };
    }
    case DELETE_FROM_CART: {
      const productId = action.payload;
      const productIndex = state.items.findIndex((item) => item.id === productId);
      const productUnits = state.items[productIndex].units;

      return {
        ...state,
        items: [...deleteItem(state.items, productIndex)],
        totalProducts: state.totalProducts - productUnits,
      };
    }
    default:
      return state;
  }
}

export { shoppingCartReducer, initialState };
