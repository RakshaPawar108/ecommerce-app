import axios from "axios";

const fetchInitialWishlistService = async (token) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
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

export { fetchInitialWishlistService };
