import axios from "axios";
import { toast } from "react-toastify";

const updateCartService = async (_id, actionType, token) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: actionType } },
      { headers: { authorization: token } }
    );

    if (response.status === 200) {
    } else {
      throw new Error();
    }

    return response;
  } catch (err) {
    toast.error(`Error: ${err}`);
  }
};

export { updateCartService };
