const priceRangeFilter = (products, { priceRange }) => {
  return products.filter(
    (product) => Number(product.price) <= Number(priceRange)
  );
};

export { priceRangeFilter };
