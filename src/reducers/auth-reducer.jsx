const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    case "SIGN_UP":
      return state;

    case "LOGOUT":
      return state;

    default:
      return state;
  }
};

export { authReducer };
