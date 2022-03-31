import { CartItem } from "../CartItem/CartItem";
import { CartBill } from "../CartBill/CartBill";
import { useCart, useAuth } from "../../../context";
import { removeFromCartService, updateCartService } from "../../../services";

export const CartItems = () => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();

  const removeFromCartHandler = async (_id) => {
    if (authState.token) {
      const response = await removeFromCartService(_id, authState.token);
      if (response.status === 200) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
      }
    } else {
      alert("Unable to remove from cart.");
    }
  };

  const updateCartHandler = async (_id, actionType) => {
    if (authState.token) {
      const response = await updateCartService(
        _id,
        actionType,
        authState.token
      );
      if (response.status === 200) {
        cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
      }
    } else {
      alert("Unable to update cart.");
    }
  };

  return (
    <>
      <div className="cart-items">
        {cartState.cart.map((cartItem) => (
          <CartItem
            key={cartItem._id}
            prodTitle={cartItem.prodTitle}
            prodImg={cartItem.prodImg}
            price={cartItem.price}
            categoryName={cartItem.categoryName}
            inWishlist={cartItem.inWishlist}
            prodDiscount={cartItem.prodDiscount}
            _id={cartItem._id}
            prodQuantity={cartItem.qty}
            removeFromCart={removeFromCartHandler}
            updateCart={updateCartHandler}
          />
        ))}
      </div>
      <CartBill />
    </>
  );
};
