const initialState = {
  items: [
    {
      name: 'Sneakers 1',
      price: 18,
      units: 3,
    },
    {
      name: 'Sneakers 2',
      price: 18,
      units: 3,
    },
  ],
};

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { shoppingCartReducer, initialState };
