import axios from "axios";

const provideAuth = () => {
  const signUp = async (user) => {
    try {
      const response = await axios.post("/api/auth/signup", user);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      } else {
        throw new Error();
      }
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const logIn = async (user) => {
    try {
      const response = await axios.post("/api/auth/login", user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      } else {
        throw new Error();
      }
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  return { signUp, logIn };
};

export { provideAuth };
