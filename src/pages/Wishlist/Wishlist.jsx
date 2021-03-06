import { useEffect } from "react";
import { WishlistItems } from "../../components";
import { useWishlist, useAuth } from "../../context";
import { fetchInitialWishlistService } from "../../services";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const {
    authState: { token },
  } = useAuth();

  const getInitialWishlist = async () => {
    try {
      const response = await fetchInitialWishlistService(token);
      if (response.status === 200) {
        wishlistDispatch({
          type: "GET_INITIAL_WISHLIST",
          payload: response.data.wishlist,
        });
      } else {
        throw new Error();
      }
    } catch (err) {
      alert("Error", err);
    }
  };

  useEffect(() => {
    getInitialWishlist();
  });

  return (
    <main className="wishlist-wrapper">
      <h3 className="wishlist-heading">My Wishlist</h3>
      <small className="num-items">{wishlistState.wishlist.length} Items</small>
      <>
        {wishlistState.wishlist.length > 0 ? (
          <WishlistItems />
        ) : (
          <h1>Your Wishlist is Empty</h1>
        )}
      </>
    </main>
  );
};
