import { CartBill, CartItems } from "./../../components";
import "./Cart.css";

export const Cart = () => {
  return (
    <main className="cart-wrapper">
      <h3 className="cart-heading">My Cart</h3>
      <small className="num-items">2 Items</small>
      <section className="cart-container">
        <CartItems />
        <CartBill />
      </section>
    </main>
  );
};
