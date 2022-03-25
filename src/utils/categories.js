const categoryFilter = (
  priceFilteredProducts,
  { healthy, fastFood, indianFood, desserts, bakery, juices }
) => {
  if (!healthy && !fastFood && !indianFood && !desserts && !bakery && !juices) {
    return priceFilteredProducts;
  }

  const filteredProducts = [];
  if (healthy) {
    let newList = priceFilteredProducts.filter(
      (product) => product.categoryName === "healthy"
    );
    filteredProducts.push(...newList);
  }
  if (fastFood) {
    let newList = priceFilteredProducts.filter(
      (product) => product.categoryName === "fast-food"
    );
    filteredProducts.push(...newList);
  }
  if (indianFood) {
    let newList = priceFilteredProducts.filter(
      (product) => product.categoryName === "indian-food"
    );
    filteredProducts.push(...newList);
  }
  if (desserts) {
    let newList = priceFilteredProducts.filter(
      (product) => product.categoryName === "desserts"
    );
    filteredProducts.push(...newList);
  }
  if (bakery) {
    let newList = priceFilteredProducts.filter(
      (product) => product.categoryName === "bakery"
    );
    filteredProducts.push(...newList);
  }
  if (juices) {
    let newList = priceFilteredProducts.filter(
      (product) => product.categoryName === "juices"
    );
    filteredProducts.push(...newList);
  }

  return filteredProducts;
};

export { categoryFilter };
