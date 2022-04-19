import axios from "axios";
import { toast } from "react-toastify";

const addToWishlistService = async (product, token) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );

    if (response.status === 201) {
      return response;
    } else {
      toast.error(`Error: ${response.status}`);
      throw new Error();
    }
  } catch (err) {
    toast.error(`Error: ${err}`);
  }
};

export { addToWishlistService };
