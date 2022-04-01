export const WishlistItem = ({
  _id,
  prodTitle,
  prodImg,
  price,
  categoryName,
  prodDiscount,
  badgeTitle,
  prodRating,
  removeFromWishlist,
}) => {
  return (
    <div className="card product-card">
      <img src={prodImg} alt="card with icon" className="product-card-img" />
      <div className="product-card-content">
        <h3 className="prod-title">{prodTitle}</h3>
        <h4 className="prod-category">{categoryName}</h4>
        <h5 className="prod-rating">Ratings: {prodRating}/5</h5>
        <button onClick={() => removeFromWishlist(_id)}>
          <i className="fas fa-heart overlay-icon"></i>
        </button>
        {badgeTitle && <span className="prod-ecomm-badge">{badgeTitle}</span>}
        <p>
          {prodDiscount ? (
            <strong>
              ₹ {(price - (prodDiscount / 100) * price).toFixed(0)}
            </strong>
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
        </p>
        <button className="prod-action-btn">Move to Cart</button>
      </div>
    </div>
  );
};
