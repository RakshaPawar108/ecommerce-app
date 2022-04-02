import axios from "axios";

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
    alert("Error", err);
  }
};

export { updateCartService };
