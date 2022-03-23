const filterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE_LOW_TO_HIGH":
      return { ...state, lowToHigh: true, highToLow: false };

    case "PRICE_HIGH_TO_LOW":
      return { ...state, lowToHigh: false, highToLow: true };

    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };

    case "CLEAR_FILTER":
      return { lowToHigh: false, highToLow: false, priceRange: 500 };

    default:
      return { ...state };
  }
};

export { filterReducer };
