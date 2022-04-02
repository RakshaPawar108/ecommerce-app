import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistItem } from "../WishlistItem/WishlistItem";
import { useCart, useAuth, useWishlist } from "../../../context";
import { removeFromWishlistService, addToCartService } from "../../../services";

export const WishlistItems = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const {
    authState: { token },
  } = useAuth();
  const [disableBtn, setDisableBtn] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const listProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlistHandler = async (_id) => {
    if (token) {
      const response = await removeFromWishlistService(_id, token);
      if (response.status === 200) {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } else {
      alert("Unable to remove from wishlist.");
    }
  };

  const alreadyInCart = (_id) => {
    const productInCart = cartState.cart.find((product) => product._id === _id);

    return productInCart ? true : false;
  };

  const addToCartHandler = async (_id) => {
    setDisableBtn(true);
    const product = products.find((product) => product._id === _id);
    if (token) {
      const response = await addToCartService(product, token);
      if (response.status === 201) {
        cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
        setDisableBtn(false);
      }
    } else {
      alert("Please log in to start adding items to cart");
      navigate("/login");
    }
  };

  useEffect(() => listProducts(), []);

  return (
    <section className="wishlist-items">
      {wishlistState.wishlist.map((wishlistItem) => (
        <WishlistItem
          key={wishlistItem._id}
          prodTitle={wishlistItem.prodTitle}
          prodImg={wishlistItem.prodImg}
          price={wishlistItem.price}
          categoryName={wishlistItem.categoryName}
          prodDiscount={wishlistItem.prodDiscount}
          _id={wishlistItem._id}
          badgeTitle={wishlistItem.badgeTitle}
          removeFromWishlist={removeFromWishlistHandler}
          prodRating={wishlistItem.prodRating}
          alreadyInCart={alreadyInCart}
          cartBtnDisabled={disableBtn}
          addToCart={addToCartHandler}
        />
      ))}
    </section>
  );
};
