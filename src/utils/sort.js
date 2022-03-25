const sortProducts = (products, { sortBy }) => {
  let sortedProducts = [...products];
  if (sortBy === "LOW_TO_HIGH") {
    sortedProducts = sortedProducts.sort(
      (prod1, prod2) => prod1.price - prod2.price
    );
  } else if (sortBy === "HIGH_TO_LOW") {
    sortedProducts = sortedProducts.sort(
      (prod1, prod2) => prod2.price - prod1.price
    );
  }

  return sortedProducts;
};

export { sortProducts };
