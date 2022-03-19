import "./ProductListing.css";
import "./../../index.css";
import { Filter, Products } from "./../../components/index";

export const ProductListing = () => {
  return (
    <main className="product-wrapper">
      <Filter />
      <Products />
    </main>
  );
};
