import { pizzaImg } from "./../../../assets/images/index";
export const CartItem = () => {
  return (
    <div className="ecomm-horizontal-card">
      <div className="image-container">
        <img src={pizzaImg} alt="pizza-img" className="img-responsive" />
      </div>
      <div className="h-card-details">
        <h3 className="prod-title">Product Title</h3>
        <h4 className="prod-category">Product Category</h4>
        <h3 className="h-card-price">
          <strong> ₹ 1000</strong>
        </h3>
        <div className="num-products">
          <button className="add-sub-btn decrease-btn">
            <i className="fas fa-minus"></i>
          </button>
          <p className="quantity">1</p>
          <button className="add-sub-btn increase-btn">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <button className="prod-action-btn wishlist-btn">
          Move to Wishlist
        </button>
        <button className="prod-action-btn remove-btn">Remove from Cart</button>
      </div>
    </div>
  );
};
