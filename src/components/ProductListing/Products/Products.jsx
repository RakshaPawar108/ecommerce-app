import { useState, useEffect } from "react";
import { Product } from "../Product/Product";
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState([]);

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
  return (
    <section className="product-container">
      {products.map((product) => (
        <Product
          prodTitle={product.prodTitle}
          prodImg={product.prodImg}
          price={product.price}
          categoryName={product.categoryName}
          badgeTitle={product.badgeTitle}
          inWishlist={product.inWishlist}
          prodDiscount={product.prodDiscount}
        />
      ))}
    </section>
  );
};
