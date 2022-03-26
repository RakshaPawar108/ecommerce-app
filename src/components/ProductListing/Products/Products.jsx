import { useState, useEffect } from "react";
import { Product } from "../Product/Product";
import axios from "axios";
import {
  sortProducts,
  categoryFilter,
  priceRangeFilter,
} from "./../../../utils";
import { useFilter } from "../../../context";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { state } = useFilter();

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

  useEffect(() => listProducts(), []);

  const priceFilteredProducts = priceRangeFilter(products, state);
  const categorizedProducts = categoryFilter(priceFilteredProducts, state);
  const sortedProducts = sortProducts(categorizedProducts, state);

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
        />
      ))}
    </section>
  );
};
