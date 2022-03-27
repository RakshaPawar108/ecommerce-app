import { createContext, useContext } from "react";
import { provideAuth } from "../services";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = provideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
