import "./Products.css";
import "./../../index.css";

const Products = () => {
  return (
    <main className="product-wrapper">
      <aside className="filter-container">
        <div className="filter-heading">
          <h2 className="main-heading">Filters</h2>
          <button className="filter-clear-btn">Clear</button>
        </div>

        {/* Price filter slider */}
        <div className="filter-type">
          <h3 className="filter-type-heading">Price</h3>
          <div className="filter-type-container">
            <label for="cost-slider">Rs.0 - Rs.1000</label>
            <input
              type="range"
              id="cost-slider"
              min="0"
              max="1000"
              value="500"
            />
          </div>
        </div>

        {/* Category Filter  */}
        <div className="filter-type">
          <h3 className="filter-type-heading">Category</h3>
          <div className="filter-type-container">
            <input type="checkbox" id="healthy" />
            <label for="healthy">Healthy</label>
          </div>
          <div className="filter-type-container">
            <input type="checkbox" id="fast-food" />
            <label for="fast-food">Fast Food</label>
          </div>
          <div className="filter-type-container">
            <input type="checkbox" id="veg" />
            <label for="veg">Vegetarian</label>
          </div>
          <div className="filter-type-container">
            <input type="checkbox" id="non-veg" />
            <label for="non-veg">Non Vegetarian</label>
          </div>
          <div className="filter-type-container">
            <input type="checkbox" id="continental" />
            <label for="continental">Continental</label>
          </div>
        </div>

        {/* Rating Filter  */}
        <div className="filter-type">
          <h3 className="filter-type-heading">Ratings</h3>
          <div className="filter-type-container">
            <input type="radio" name="star-rating" />
            <label for="star-four">4⭐ and above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" name="star-rating" />
            <label for="star-three">3⭐ and above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" name="star-rating" />
            <label for="star-two">2⭐ and above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" name="star-rating" />
            <label for="star-one">1⭐ and above</label>
          </div>
        </div>

        {/* Price filter radio  */}
        <div className="filter-type">
          <h3 className="filter-type-heading">Sort by</h3>
          <div className="filter-type-container">
            <input type="radio" id="low-to-high" name="sort-by" />
            <label for="low-to-high">Price - Low to High</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" id="high-to-low" name="sort-by" />
            <label for="high-to-low">Price - High to Low</label>
          </div>
        </div>
      </aside>

      <section className="product-container">
        <div className="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            className="product-card-img"
          />
          <div className="product-card-content">
            <h3 className="prod-title">Product Title</h3>
            <h4 className="prod-category">Product Category</h4>
            <i className="fas fa-heart overlay-icon"></i>
            <span className="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small className="card-discount">(50% OFF)</small>
            </p>
            <a href="/" className="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>

        <div className="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            className="product-card-img"
          />
          <div className="product-card-content">
            <h3 className="prod-title">Product Title</h3>
            <h4 className="prod-category">Product Category</h4>
            <i className="fas fa-heart overlay-icon"></i>
            <span className="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small className="card-discount">(50% OFF)</small>
            </p>
            <a href="/" className="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>

        <div className="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            className="product-card-img"
          />
          <div className="product-card-content">
            <h3 className="prod-title">Product Title</h3>
            <h4 className="prod-category">Product Category</h4>
            <i className="fas fa-heart overlay-icon"></i>
            <span className="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small className="card-discount">(50% OFF)</small>
            </p>
            <a href="/" className="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>

        <div className="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            className="product-card-img"
          />
          <div className="product-card-content">
            <h3 className="prod-title">Product Title</h3>
            <h4 className="prod-category">Product Category</h4>
            <i className="fas fa-heart overlay-icon"></i>
            <span className="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small className="card-discount">(50% OFF)</small>
            </p>
            <a href="/" className="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>

        <div className="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            className="product-card-img"
          />
          <div className="product-card-content">
            <h3 className="prod-title">Product Title</h3>
            <h4 className="prod-category">Product Category</h4>
            <i className="fas fa-heart overlay-icon"></i>
            <span className="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small className="card-discount">(50% OFF)</small>
            </p>
            <a href="/" className="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
