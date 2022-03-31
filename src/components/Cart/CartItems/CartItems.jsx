import { CartItem } from "../CartItem/CartItem";
import { CartBill } from "../CartBill/CartBill";
import { useCart } from "../../../context";

export const CartItems = () => {
  const { cartState } = useCart();
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
          />
        ))}
      </div>
      <CartBill />
    </>
  );
};
