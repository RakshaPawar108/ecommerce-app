import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import "./User.css";

export const User = () => {
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const logoutHandler = () => {
    cartDispatch({ type: "EMPTY_CART" });
    wishlistDispatch({ type: "EMPTY_WISHLIST" });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <h2>Logout</h2>
      <Link to="/logout">
        <button className="button btn-logout" onClick={logoutHandler}>
          Logout
        </button>
      </Link>
    </div>
  );
};
