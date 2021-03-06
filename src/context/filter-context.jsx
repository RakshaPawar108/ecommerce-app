import { createContext, useReducer, useContext } from "react";
import { filterReducer } from "./../reducers";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortBy: "",
    healthy: false,
    fastFood: false,
    indianFood: false,
    desserts: false,
    bakery: false,
    juices: false,
    priceRange: 1000,
    rating: "",
    inStock: false,
    bestseller: false,
    newest: false,
  });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
