import { CartItem } from "../CartItem/CartItem";
import { CartBill } from "../CartBill/CartBill";
import { useCart, useAuth } from "../../../context";
import { removeFromCartService } from "../../../services";

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
            removeFromCart={removeFromCartHandler}
          />
        ))}
      </div>
      <CartBill />
    </>
  );
};
