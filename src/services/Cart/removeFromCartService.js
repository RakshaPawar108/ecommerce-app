import axios from "axios";
import { toast } from "react-toastify";

const removeFromCartService = async (_id, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
    } else {
      throw new Error();
    }

    return response;
  } catch (err) {
    toast.error(`Error: ${err}`);
  }
};

export { removeFromCartService };
