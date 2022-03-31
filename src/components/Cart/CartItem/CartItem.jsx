export const CartItem = ({
  _id,
  prodTitle,
  prodImg,
  price,
  categoryName,
  inWishlist,
  prodDiscount,
}) => {
  const discountedPrice = (price - (prodDiscount / 100) * price).toFixed(0);
  return (
    <div className="ecomm-horizontal-card">
      <div className="image-container">
        <img src={prodImg} alt="prod-img" className="img-responsive" />
      </div>
      <div className="h-card-details">
        <h2 className="prod-title">{prodTitle}</h2>
        <h3 className="prod-category">{categoryName}</h3>
        <h4 className="h-card-price">
          {prodDiscount ? (
            <strong>₹ {discountedPrice}</strong>
          ) : (
            <strong>₹ {price}</strong>
          )}{" "}
          {prodDiscount ? (
            <small>
              <s>₹ {String(price)}</s>
            </small>
          ) : null}
          {prodDiscount ? (
            <small className="card-discount">({prodDiscount}% OFF)</small>
          ) : null}
        </h4>
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
