export const CartBill = () => {
  return (
    <div className="cart-price-container">
      <div className="ecomm-billing-card">
        <h2 className="billing-card-title">Price Details</h2>
        <div className="pricing-container">
          <div className="items-price">
            <p className="item-type">Price (2 items)</p>
            <p className="item-type-price">₹ 1800</p>
          </div>
          <div className="items-price">
            <p className="item-type">Discount</p>
            <p className="item-type-price">₹ 20</p>
          </div>
          <div className="items-price">
            <p className="item-type">Delivery</p>
            <p className="item-type-price">₹ 15</p>
          </div>
        </div>
        <div className="items-price total-price-container">
          <p className="item-type total-price">Total Amount</p>
          <p className="item-type-price total-price-value">₹ 1795</p>
        </div>
        <button className="prod-action-btn order-btn">PLACE ORDER</button>
      </div>
    </div>
  );
};
