export const Product = ({
  prodTitle,
  prodImg,
  price,
  categoryName,
  badgeTitle,
  inWishlist,
  prodDiscount,
}) => {
  return (
    <div className="card product-card">
      <div className="prod-img-container">
        <img src={prodImg} alt="card with icon" className="product-card-img" />
      </div>
      <div className="product-card-content">
        <h3 className="prod-title">{prodTitle}</h3>
        <h4 className="prod-category">{categoryName}</h4>
        <i className="fas fa-heart overlay-icon"></i>
        <span className="prod-ecomm-badge">{badgeTitle}</span>
        <p>
          <strong>₹ {price}</strong>{" "}
          <small>
            <s>₹ 2999</s>
          </small>
          <small className="card-discount">({prodDiscount} OFF)</small>
        </p>
        <a href="/" className="prod-action-btn">
          Move to Cart
        </a>
      </div>
    </div>
  );
};
