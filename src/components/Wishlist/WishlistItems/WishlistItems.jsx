import { WishlistItem } from "../WishlistItem/WishlistItem";
import { useCart, useAuth, useWishlist } from "../../../context";
import { removeFromWishlistService } from "../../../services";

export const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const {
    authState: { token },
  } = useAuth();

  const removeFromWishlistHandler = async (_id) => {
    if (token) {
      const response = await removeFromWishlistService(_id, token);
      if (response.status === 200) {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } else {
      alert("Unable to remove from wishlist.");
    }
  };

  return (
    <section className="wishlist-items">
      {wishlistState.wishlist.map((wishlistItem) => (
        <WishlistItem
          key={wishlistItem._id}
          prodTitle={wishlistItem.prodTitle}
          prodImg={wishlistItem.prodImg}
          price={wishlistItem.price}
          categoryName={wishlistItem.categoryName}
          prodDiscount={wishlistItem.prodDiscount}
          _id={wishlistItem._id}
          badgeTitle={wishlistItem.badgeTitle}
          removeFromWishlist={removeFromWishlistHandler}
          prodRating={wishlistItem.prodRating}
        />
      ))}
    </section>
  );
};
