import { createContext, useContext, useReducer, useEffect } from "react";

import { authReducer } from "../reducers";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: "CHECK_INITIAL", payload: { user: user, token: token } });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
