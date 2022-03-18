import { WishlistItems } from "../../components/Wishlist/WishlistItems/WishlistItems";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <main className="wishlist-wrapper">
      <h3 className="wishlist-heading">My Wishlist</h3>
      <small className="num-items">3 Items</small>
      <WishlistItems />
    </main>
  );
};

export default Wishlist;
