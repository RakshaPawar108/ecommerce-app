import axios from "axios";

const fetchInitialCartService = async (token) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: { authorization: token },
    });

    if (response.status === 200) {
    } else {
      throw new Error();
    }

    return response;
  } catch (err) {
    alert("Error", err);
  }
};

export { fetchInitialCartService };
