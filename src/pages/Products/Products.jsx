import "./Products.css";
import "./../../index.css";
import Filter from "../../components/Filter/Filter";

const Products = () => {
  return (
    <main className="product-wrapper">
      <Filter />

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
