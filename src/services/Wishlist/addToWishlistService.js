import axios from "axios";

const addToWishlistService = async (product, token) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );

    if (response.status === 201) {
    } else {
      throw new Error();
    }

    return response;
  } catch (err) {}
};

export { addToWishlistService };
