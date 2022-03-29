import axios from "axios";

const provideAuth = () => {
  const signUp = async (user) => {
    try {
      const response = await axios.post("/api/auth/signup", user);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        return response
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { signUp };
};

export { provideAuth };
