import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../Product/Product";
import axios from "axios";
import {
  sortProducts,
  categoryFilter,
  priceRangeFilter,
  otherFilters,
  ratingFilter,
} from "./../../../utils";
import { useAuth, useFilter, useCart, useWishlist } from "../../../context";
import {
  addToCartService,
  addToWishlistService,
  removeFromWishlistService,
} from "../../../services";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { state } = useFilter();
  const {
    authState: { token },
  } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const [disableBtn, setDisableBtn] = useState(false);

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

  const alreadyInCart = (_id) => {
    const productInCart = cartState.cart.find((product) => product._id === _id);

    return productInCart ? true : false;
  };

  const inWishlist = (_id) => {
    const productInWishlist = wishlistState.wishlist.find(
      (product) => product._id === _id
    );

    return productInWishlist ? true : false;
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
        } else {
          alert("Unable to add to Wishlist");
        }
      } else {
        const response = await removeFromWishlistService(_id, token);
        if (response.status === 200) {
          wishlistDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: response.data.wishlist,
          });
        } else {
          alert("Unable to remove from wishlist");
        }
      }
    } else {
      alert("Please log in to start adding items to wishlist");
      navigate("/login");
    }
  };

  useEffect(() => listProducts(), []);

  const priceFilteredProducts = priceRangeFilter(products, state);
  const categorizedProducts = categoryFilter(priceFilteredProducts, state);
  const otherFilteredProducts = otherFilters(categorizedProducts, state);
  const ratingFilteredProducts = ratingFilter(otherFilteredProducts, state);
  const sortedProducts = sortProducts(ratingFilteredProducts, state);

  return (
    <section className="product-container">
      {sortedProducts.map((product) => (
        <Product
          key={product._id}
          prodTitle={product.prodTitle}
          prodImg={product.prodImg}
          price={product.price}
          categoryName={product.categoryName}
          badgeTitle={product.badgeTitle}
          prodDiscount={product.prodDiscount}
          prodRating={product.prodRating}
          addToCart={addToCartHandler}
          _id={product._id}
          alreadyInCart={alreadyInCart}
          cartBtnDisabled={disableBtn}
          inWishlist={inWishlist}
          addToWishlist={addToWishlistHandler}
        />
      ))}
    </section>
  );
};
