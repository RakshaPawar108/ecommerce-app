const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };

    case "HEALTHY":
      return {
        ...state,
        healthy: action.payload.healthy,
      };

    case "FAST_FOOD":
      return { ...state, fastFood: action.payload.fastFood };

    case "INDIAN_FOOD":
      return { ...state, indianFood: action.payload.indianFood };

    case "DESSERTS":
      return { ...state, desserts: action.payload.desserts };

    case "BAKERY":
      return { ...state, bakery: action.payload.bakery };

    case "JUICES":
      return { ...state, juices: action.payload.juices };

    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload.priceRange };

    case "RATINGS":
      return { ...state, rating: action.payload.rating };

    case "IN_STOCK":
      return { ...state, inStock: action.payload.inStock };

    case "BESTSELLER":
      return { ...state, bestseller: action.payload.bestseller };

    case "NEWEST":
      return { ...state, newest: action.payload.newest };

    case "CLEAR_FILTER":
      return {
        sortBy: "",
        priceRange: 1000,
        healthy: false,
        fastFood: false,
        indianFood: false,
        desserts: false,
        bakery: false,
        juices: false,
        rating: "",
        inStock: false,
        bestseller: false,
        newest: false,
      };

    default:
      return { ...state };
  }
};

export { filterReducer };
