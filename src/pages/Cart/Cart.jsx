import { useEffect } from "react";
import { useCart, useAuth } from "../../context";
import { fetchInitialCartService } from "../../services";
import { CartItems } from "./../../components";
import "./Cart.css";

export const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();

  const getInitialCart = async () => {
    try {
      const response = await fetchInitialCartService(authState.token);
      if (response.status === 200) {
        cartDispatch({ type: "FETCH_INITIAL", payload: response.data.cart });
      } else {
        throw new Error();
      }
    } catch (err) {}
  };

  useEffect(() => {
    getInitialCart();
  }, []);

  return (
    <main className="cart-wrapper">
      <h3 className="cart-heading">My Cart</h3>
      <small className="num-items">{cartState.cart.length} Items</small>
      <section className="cart-container">
        {cartState.cart.length > 0 ? (
          <CartItems />
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </section>
    </main>
  );
};
