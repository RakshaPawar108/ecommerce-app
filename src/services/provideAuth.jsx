import axios from "axios";

const provideAuth = () => {
  const signUp = (user) => {
    try {
      const response = axios.post("/api/auth/signup", user);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return { signUp };
};

export { provideAuth };
