import { WishlistItems } from "../../components/Wishlist/WishlistItems/WishlistItems";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <main class="wishlist-wrapper">
      <h3 class="wishlist-heading">My Wishlist</h3>
      <small class="num-items">3 Items</small>
      <WishlistItems />
    </main>
  );
};

export default Wishlist;
