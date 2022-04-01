import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import { CartBill } from "../CartBill/CartBill";
import { useCart, useAuth, useWishlist } from "../../../context";
import {
  removeFromCartService,
  updateCartService,
  addToWishlistService,
} from "../../../services";

export const CartItems = () => {
  const [products, setProducts] = useState([]);
  const { cartState, cartDispatch } = useCart();
  const {
    authState: { token },
  } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const removeFromCartHandler = async (_id) => {
    if (token) {
      const response = await removeFromCartService(_id, token);
      if (response.status === 200) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
      }
    } else {
      alert("Unable to remove from cart.");
    }
  };

  const updateCartHandler = async (_id, actionType) => {
    if (token) {
      const response = await updateCartService(_id, actionType, token);
      if (response.status === 200) {
        cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
      }
    } else {
      alert("Unable to update cart.");
    }
  };

  const inWishlist = (_id) => {
    const productInWishlist = wishlistState.wishlist.find(
      (product) => product._id === _id
    );

    return productInWishlist ? true : false;
  };

  const listProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addToWishlistHandler = async (_id) => {
    const product = products.find((product) => product._id === _id);
    if (token) {
      if (!inWishlist(_id)) {
        const response = await addToWishlistService(product, token);
        if (response.status === 201) {
          wishlistDispatch({
            type: "ADD_TO_WISHLIST",
            payload: response.data.wishlist,
          });
        }
      }
    } else {
      alert("Please log in to start adding items to wishlist");
      navigate("/login");
    }
  };

  useEffect(() => listProducts(), []);

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
            prodDiscount={cartItem.prodDiscount}
            _id={cartItem._id}
            prodQuantity={cartItem.qty}
            removeFromCart={removeFromCartHandler}
            updateCart={updateCartHandler}
            addToWishlist={addToWishlistHandler}
          />
        ))}
      </div>
      <CartBill />
    </>
  );
};
