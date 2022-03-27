export const Product = ({
  prodTitle,
  prodImg,
  price,
  categoryName,
  badgeTitle,
  inWishlist,
  prodDiscount,
  prodRating,
}) => {
  return (
    <div className="card product-card">
      <div className="prod-img-container">
        <img src={prodImg} alt="card with icon" className="product-card-img" />
      </div>
      <div className="product-card-content">
        <h3 className="prod-title">{prodTitle}</h3>
        <h4 className="prod-category">{categoryName}</h4>
        <h5 className="prod-rating">Ratings: {prodRating}/5</h5>
        <i className="far fa-heart overlay-icon"></i>
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
        <a href="/" className="prod-action-btn">
          Move to Cart
        </a>
      </div>
    </div>
  );
};
