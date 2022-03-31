import { useCart } from "../../../context";

export const CartBill = () => {
  const { cartState } = useCart();

  const curr = cartState.cart.reduce(
    (acc, curr) => ({
      ...acc,
      price: acc.price + curr.price * curr.qty,
    }),
    { price: 0, qty: 0 }
  );

  const totalPrice = curr.price;

  const calcDiscount = (price, prodDiscount, qty) =>
    price * qty * (1 - prodDiscount / 100);

  const priceAfterDiscount = cartState.cart.reduce(
    (acc, curr) => acc + calcDiscount(curr.price, curr.prodDiscount, curr.qty),
    0,
    { price: 0, prodDiscount: 0, qty: 0 }
  );

  const discount = totalPrice - priceAfterDiscount;
  return (
    <div className="cart-price-container">
      <div className="ecomm-billing-card">
        <h2 className="billing-card-title">Price Details</h2>
        <div className="pricing-container">
          <div className="items-price">
            <p className="item-type">Price ({cartState.cart.length} Items)</p>
            <p className="item-type-price">₹ {totalPrice.toFixed(2)}</p>
          </div>
          <div className="items-price">
            <p className="item-type">Discount</p>
            <p className="item-type-price">₹ {discount.toFixed(2)}</p>
          </div>
          <div className="items-price">
            <p className="item-type">Delivery</p>
            <p className="item-type-price">₹ 15</p>
          </div>
        </div>
        <div className="items-price total-price-container">
          <p className="item-type total-price">Total Amount</p>
          <p className="item-type-price total-price-value">₹ {totalPrice - discount + 15}</p>
        </div>
        <button className="prod-action-btn order-btn">PLACE ORDER</button>
      </div>
    </div>
  );
};
