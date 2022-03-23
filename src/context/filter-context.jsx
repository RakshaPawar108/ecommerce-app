import { createContext } from "react";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};

export { FilterProvider };
