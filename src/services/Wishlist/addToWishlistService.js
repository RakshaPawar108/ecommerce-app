import axios from "axios";

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
      alert("Error", response);
      throw new Error();
    }
  } catch (err) {
    alert("Error", err);
  }
};

export { addToWishlistService };
