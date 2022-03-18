import "./Cart.css";

const Cart = () => {
  return (
    <main class="cart-wrapper">
      <h3 class="cart-heading">My Cart</h3>
      <small class="num-items">2 Items</small>
      <section class="cart-container">
        <div class="cart-items">
          <div class="ecomm-horizontal-card">
            <div class="image-container">
              <img
                src="/assets/images/pizza.jpg"
                alt="pizza-img"
                class="img-responsive"
              />
            </div>
            <div class="h-card-details">
              <h3 class="prod-title">Product Title</h3>
              <h4 class="prod-category">Product Category</h4>
              <h3 class="h-card-price">
                <strong> ₹ 1000</strong>
              </h3>
              <div class="num-products">
                <button class="add-sub-btn decrease-btn">
                  <i class="fas fa-minus"></i>
                </button>
                <p class="quantity">1</p>
                <button class="add-sub-btn increase-btn">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <button class="prod-action-btn wishlist-btn">
                Move to Wishlist
              </button>
              <button class="prod-action-btn remove-btn">
                Remove from Cart
              </button>
            </div>
          </div>
          <div class="ecomm-horizontal-card">
            <div class="image-container">
              <img
                src="/assets/images/pizza.jpg"
                alt="pizza-img"
                class="img-responsive"
              />
            </div>
            <div class="h-card-details">
              <h3 class="prod-title">Product Title</h3>
              <h4 class="prod-category">Product Category</h4>
              <h3 class="h-card-price">
                <strong> ₹ 800</strong>
              </h3>
              <div class="num-products">
                <button class="add-sub-btn decrease-btn">
                  <i class="fas fa-minus"></i>
                </button>
                <p class="quantity">1</p>
                <button class="add-sub-btn increase-btn">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <button class="prod-action-btn wishlist-btn">
                Move to Wishlist
              </button>
              <button class="prod-action-btn remove-btn">
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
        <div class="cart-price-container">
          <div class="ecomm-billing-card">
            <h2 class="billing-card-title">Price Details</h2>
            <div class="pricing-container">
              <div class="items-price">
                <p class="item-type">Price (2 items)</p>
                <p class="item-type-price">₹ 1800</p>
              </div>
              <div class="items-price">
                <p class="item-type">Discount</p>
                <p class="item-type-price">₹ 20</p>
              </div>
              <div class="items-price">
                <p class="item-type">Delivery</p>
                <p class="item-type-price">₹ 15</p>
              </div>
            </div>
            <div class="items-price total-price-container">
              <p class="item-type total-price">Total Amount</p>
              <p class="item-type-price total-price-value">₹ 1795</p>
            </div>
            <button class="prod-action-btn order-btn">PLACE ORDER</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
