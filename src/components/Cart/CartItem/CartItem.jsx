import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../../context";

export const CartItem = ({
  _id,
  prodTitle,
  prodImg,
  price,
  categoryName,
  prodDiscount,
  prodQuantity,
  removeFromCart,
  updateCart,
  addToWishlist,
  wishlistBtnDisabled,
}) => {
  const discountedPrice = (price - (prodDiscount / 100) * price).toFixed(0);
  const { wishlistState } = useWishlist();
  const navigate = useNavigate();

  const inWishlist = (_id) => {
    const productInWishlist = wishlistState.wishlist.find(
      (product) => product._id === _id
    );

    return productInWishlist ? true : false;
  };

  const moveToWishlist = (_id) => {
    removeFromCart(_id);
    addToWishlist(_id);
  };

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
          <button
            className="add-sub-btn decrease-btn"
            onClick={() =>
              prodQuantity === 1
                ? removeFromCart(_id)
                : updateCart(_id, "decrement")
            }
          >
            <i className="fas fa-minus"></i>
          </button>
          <p className="quantity">{prodQuantity}</p>
          <button
            className="add-sub-btn increase-btn"
            onClick={() => updateCart(_id, "increment")}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {inWishlist(_id) === false ? (
          <button
            onClick={() => moveToWishlist(_id)}
            className="prod-action-btn wishlist-btn"
            disabled={wishlistBtnDisabled}
          >
            Move to Wishlist
          </button>
        ) : (
          <button
            onClick={() => navigate("/wishlist")}
            className="prod-action-btn wishlist-btn"
            disabled={wishlistBtnDisabled}
          >
            Go to Wishlist
          </button>
        )}

        <button
          onClick={() => removeFromCart(_id)}
          className="prod-action-btn remove-btn"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
