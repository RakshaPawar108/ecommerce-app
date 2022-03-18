import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <header className="header">
        <div className="navigation-brand">
          <a href="/index.html">MySite</a>
        </div>

        <div className="input-container outlined search-box">
          <input type="search" placeholder=" " />
          <label>Search for Products, Brands and more...</label>
        </div>

        <ul className="navigation-items">
          <li className="navigation-item">
            <button className="button">
              <a href="/Login/login.html">Login</a>
            </button>
          </li>
          <li className="navigation-item">
            <a href="/Product/product.html">Products</a>
          </li>
          <li className="navigation-item">
            <a href="/Wishlist/wishlist.html">
              <div className="icons-container badge">
                <i className="fas fa-heart badge-icon"></i>
                <span className="icon-badge">10</span>
              </div>
              <span>Wishlist</span>
            </a>
          </li>
          <li className="navigation-item">
            <a href="/Cart/cart.html">
              <div className="icons-container badge">
                <i className="fas fa-shopping-cart badge-icon"></i>
                <span className="icon-badge">5</span>
              </div>
              <span>Cart</span>
            </a>
          </li>
        </ul>

        <label for="check" className="bar">
          <span className="fas fa-2x fa-bars navbar-open-btn"></span>
          <span className="far fa-2x fa-times-circle navbar-close-btn"></span>
        </label>
      </header>
    </>
  );
};

export default Navbar;
