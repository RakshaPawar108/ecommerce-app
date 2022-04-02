import { useNavigate } from "react-router-dom";

export const Product = ({
  _id,
  prodTitle,
  prodImg,
  price,
  categoryName,
  badgeTitle,
  inWishlist,
  prodDiscount,
  prodRating,
  addToCart,
  alreadyInCart,
  cartBtnDisabled,
  addToWishlist,
  wishlistBtnDisabled,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card product-card">
      <div className="prod-img-container">
        <img src={prodImg} alt="card with icon" className="product-card-img" />
      </div>
      <div className="product-card-content">
        <h3 className="prod-title">{prodTitle}</h3>
        <h4 className="prod-category">{categoryName}</h4>
        <h5 className="prod-rating">Ratings: {prodRating}/5</h5>
        {inWishlist(_id) === false ? (
          <button
            className="wishlist-btn"
            disabled={wishlistBtnDisabled}
            title="Add to Wishlist"
            onClick={() => addToWishlist(_id)}
          >
            <i className="far fa-heart overlay-icon"></i>
          </button>
        ) : (
          <button
            className="wishlist-btn"
            disabled={wishlistBtnDisabled}
            title="Remove from Wishlist"
            onClick={() => addToWishlist(_id)}
          >
            <i className="fas fa-heart overlay-icon"></i>
          </button>
        )}

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
            disabled={badgeTitle === "Sold Out" || cartBtnDisabled}
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
