const filterReducer = (state, action) => {
  const {
    healthy,
    fastFood,
    indianFood,
    desserts,
    bakery,
    juices,
    priceRange,
  } = action.payload;
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };

    case "HEALTHY":
      return {
        ...state,
        healthy: healthy,
      };

    case "FAST_FOOD":
      return { ...state, fastFood: fastFood };

    case "INDIAN_FOOD":
      return { ...state, indianFood: indianFood };

    case "DESSERTS":
      return { ...state, desserts: desserts };

    case "BAKERY":
      return { ...state, bakery: bakery };

    case "JUICES":
      return { ...state, juices: juices };

    case "PRICE_RANGE":
      return { ...state, priceRange: priceRange };

    case "CLEAR_FILTER":
      return { sortBy: "", priceRange: 100, healthy: false };

    default:
      return { ...state };
  }
};

export { filterReducer };
