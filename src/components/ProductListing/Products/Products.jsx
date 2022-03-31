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
import { useAuth, useFilter, useCart } from "../../../context";
import { addToCartService } from "../../../services";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { state } = useFilter();
  const { authState } = useAuth();
  const { cartState, cartDispatch } = useCart();
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
    if (authState.token) {
      const response = await addToCartService(product, authState.token);
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
          inWishlist={product.inWishlist}
          prodDiscount={product.prodDiscount}
          prodRating={product.prodRating}
          addToCart={addToCartHandler}
          _id={product._id}
          alreadyInCart={alreadyInCart}
          cartBtnDisabled={disableBtn}
        />
      ))}
    </section>
  );
};
