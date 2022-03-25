const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };

    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };

    case "CLEAR_FILTER":
      return { sortBy: "", priceRange: 500 };

    default:
      return { ...state };
  }
};

export { filterReducer };
