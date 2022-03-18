import { pizzaImg } from "./../../../assets/images/index";

export const WishlistItem = () => {
  return (
    <div class="card product-card">
      <img src={pizzaImg} alt="card with icon" class="product-card-img" />
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
  );
};
