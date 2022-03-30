const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: action.payload.cart };

    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload.cart };

    case "UPDATE_CART":
      return { ...state, cart: action.payload.cart };
    default:
      return state;
  }
};

export { cartReducer };
