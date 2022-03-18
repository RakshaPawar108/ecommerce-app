import "./Wishlist.css";

const Wishlist = () => {
  return (
    <main class="wishlist-wrapper">
      <h3 class="wishlist-heading">My Wishlist</h3>
      <small class="num-items">5 Items</small>
      <section class="wishlist-items">
        <div class="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            class="product-card-img"
          />
          <div class="product-card-content">
            <h3 class="prod-title">Product Title</h3>
            <h4 class="prod-category">Product Category</h4>
            <i class="fas fa-heart overlay-icon"></i>
            <span class="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small class="card-discount">(50% OFF)</small>
            </p>
            <a href="/" class="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>

        <div class="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            class="product-card-img"
          />
          <div class="product-card-content">
            <h3 class="prod-title">Product Title</h3>
            <h4 class="prod-category">Product Category</h4>
            <i class="fas fa-heart overlay-icon"></i>
            <span class="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small class="card-discount">(50% OFF)</small>
            </p>
            <a href="/" class="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>
        <div class="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            class="product-card-img"
          />
          <div class="product-card-content">
            <h3 class="prod-title">Product Title</h3>
            <h4 class="prod-category">Product Category</h4>
            <i class="fas fa-heart overlay-icon"></i>
            <span class="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small class="card-discount">(50% OFF)</small>
            </p>
            <a href="/" class="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>
        <div class="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            class="product-card-img"
          />
          <div class="product-card-content">
            <h3 class="prod-title">Product Title</h3>
            <h4 class="prod-category">Product Category</h4>
            <i class="fas fa-heart overlay-icon"></i>
            <span class="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small class="card-discount">(50% OFF)</small>
            </p>
            <a href="/" class="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>
        <div class="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            class="product-card-img"
          />
          <div class="product-card-content">
            <h3 class="prod-title">Product Title</h3>
            <h4 class="prod-category">Product Category</h4>
            <i class="fas fa-heart overlay-icon"></i>
            <span class="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small class="card-discount">(50% OFF)</small>
            </p>
            <a href="/" class="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>
      </section>
      <h3 class="wishlist-heading">You may also like</h3>
      <section class="wishlist-items">
        <div class="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            class="product-card-img"
          />
          <div class="product-card-content">
            <h3 class="prod-title">Product Title</h3>
            <h4 class="prod-category">Product Category</h4>
            <i class="far fa-heart overlay-icon"></i>
            <span class="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small class="card-discount">(50% OFF)</small>
            </p>
            <a href="/" class="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>

        <div class="card product-card">
          <img
            src="/assets/images/pizza.jpg"
            alt="card with icon"
            class="product-card-img"
          />
          <div class="product-card-content">
            <h3 class="prod-title">Product Title</h3>
            <h4 class="prod-category">Product Category</h4>
            <i class="far fa-heart overlay-icon"></i>
            <span class="prod-ecomm-badge">New</span>
            <p>
              <strong>Rs. 1499</strong>{" "}
              <small>
                <s>Rs. 2999</s>
              </small>
              <small class="card-discount">(50% OFF)</small>
            </p>
            <a href="/" class="prod-action-btn">
              Move to Cart
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
