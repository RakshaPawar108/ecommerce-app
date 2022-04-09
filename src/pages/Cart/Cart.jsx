import { useEffect, useState } from "react";
import { useCart, useAuth } from "../../context";
import { fetchInitialCartService } from "../../services";
import { CartItems, Loader } from "./../../components";
import "./Cart.css";

export const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const [loading, setLoading] = useState(true);
  const {
    authState: { token },
  } = useAuth();

  const getInitialCart = async () => {
    try {
      const response = await fetchInitialCartService(token);
      if (response.status === 200) {
        setLoading(false);
        cartDispatch({ type: "FETCH_INITIAL", payload: response.data.cart });
      } else {
        throw new Error();
      }
    } catch (err) {}
  };

  useEffect(() => {
    getInitialCart();
  });

  return (
    <main className="cart-wrapper">
      {loading && <Loader />}
      <h3 className="cart-heading">My Cart</h3>
      <small className="num-items">{cartState.cart.length} Items</small>
      <section className="cart-container">
        {!loading ? (
          cartState.cart.length > 0 ? (
            <CartItems />
          ) : (
            <h1>Your Cart is Empty</h1>
          )
        ) : null}
      </section>
    </main>
  );
};
