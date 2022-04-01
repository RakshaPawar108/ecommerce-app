import { useNavigate } from "react-router-dom";
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
  addToCart,
  alreadyInCart,
  cartBtnDisabled,
}) => {
  const navigate = useNavigate();
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
        {alreadyInCart(_id) === false ? (
          <button
            disabled={cartBtnDisabled}
            onClick={() => addToCart(_id)}
            className="prod-action-btn"
          >
            Add To Cart
          </button>
        ) : (
          <button
            disabled={cartBtnDisabled}
            onClick={() => navigate("/cart")}
            className="prod-action-btn"
          >
            Go to Cart
          </button>
        )}
      </div>
    </div>
  );
};
