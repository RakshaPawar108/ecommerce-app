import "./ProductListing.css";
import "./../../index.css";
import Filter from "../../components/Filter/Filter";
import { Products } from "../../components/ProductListing/Products/Products";

const ProductListing = () => {
  return (
    <main className="product-wrapper">
      <Filter />
      <Products />
    </main>
  );
};

export default ProductListing;
