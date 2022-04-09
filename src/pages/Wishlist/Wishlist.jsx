import { useEffect, useState } from "react";
import { Loader, WishlistItems } from "../../components";
import { useWishlist, useAuth } from "../../context";
import { fetchInitialWishlistService } from "../../services";
import { toast } from "react-toastify";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const {
    authState: { token },
  } = useAuth();
  const [loading, setLoading] = useState(true);

  const getInitialWishlist = async () => {
    try {
      const response = await fetchInitialWishlistService(token);
      if (response.status === 200) {
        setLoading(false);
        wishlistDispatch({
          type: "GET_INITIAL_WISHLIST",
          payload: response.data.wishlist,
        });
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error(`Error in fetching wishlist: ${err}`);
    }
  };

  useEffect(() => {
    getInitialWishlist();
  });

  return (
    <main className="wishlist-wrapper">
      {loading && <Loader />}
      <h3 className="wishlist-heading">My Wishlist</h3>
      <small className="num-items">{wishlistState.wishlist.length} Items</small>
      {!loading ? (
        <>
          {wishlistState.wishlist.length > 0 ? (
            <WishlistItems />
          ) : (
            <h1>Your Wishlist is Empty</h1>
          )}
        </>
      ) : null}
    </main>
  );
};
