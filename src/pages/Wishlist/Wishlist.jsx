import { WishlistItems } from "../../components/index";
import "./Wishlist.css";

export const Wishlist = () => {
  return (
    <main className="wishlist-wrapper">
      <h3 className="wishlist-heading">My Wishlist</h3>
      <small className="num-items">3 Items</small>
      <WishlistItems />
    </main>
  );
};
