import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth, useCart } from "../../context";

const Navbar = () => {
  const {
    authState: { token, user },
  } = useAuth();
  const { cartState } = useCart();
  return (
    <>
      <input type="checkbox" id="check" />
      <header className="header">
        <div className="navigation-brand">
          <Link to="/">MySite</Link>
        </div>

        <div className="input-container outlined search-box">
          <input type="search" placeholder=" " />
          <label>Search for Products, Brands and more...</label>
        </div>

        <ul className="navigation-items">
          <li className="navigation-item">
            {token && user ? (
              <Link to="/user">{user.firstName}</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li className="navigation-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="navigation-item">
            <Link to="/wishlist">
              <div className="icons-container badge">
                <i className="fas fa-heart badge-icon"></i>
                <span className="icon-badge">10</span>
              </div>
              <span>Wishlist</span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link to={token ? "/cart" : "/login"}>
              <div className="icons-container badge">
                <i className="fas fa-shopping-cart badge-icon"></i>
                {cartState.cart.length > 0 ? (
                  <span className="icon-badge">{cartState.cart.length}</span>
                ) : (
                  <span className="icon-badge">0</span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </li>
        </ul>

        <label htmlFor="check" className="bar">
          <span className="fas fa-2x fa-bars navbar-open-btn"></span>
          <span className="far fa-2x fa-times-circle navbar-close-btn"></span>
        </label>
      </header>
    </>
  );
};

export { Navbar };
