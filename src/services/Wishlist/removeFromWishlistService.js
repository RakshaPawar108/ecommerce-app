import axios from "axios";

const removeFromWishlistService = async (_id, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
    } else {
      throw new Error();
    }

    return response;
  } catch (err) {}
};

export { removeFromWishlistService };
