const authReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_INITIAL":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "SIGN_UP":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
      return { ...state, user: null, token: null };

    default:
      return state;
  }
};

export { authReducer };
