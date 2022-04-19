import axios from "axios";
import { toast } from "react-toastify";

const addToCartService = async (product, token) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: token } }
    );

    if (response.status === 201) {
    } else {
      throw new Error();
    }

    return response;
  } catch (err) {
    toast.error(`Error: ${err}`);
  }
};

export { addToCartService };
