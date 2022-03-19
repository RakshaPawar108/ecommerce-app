import { CartBill } from "../../components/Cart/CartBill/CartBill";
import { CartItems } from "../../components/Cart/CartItems/CartItems";
import "./Cart.css";

const Cart = () => {
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

export default Cart;
