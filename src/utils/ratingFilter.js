const ratingFilter = (products, { rating }) => {
  if (rating === "") {
    return products;
  }

  return products.filter((product) => product.prodRating >= Number(rating));
};

export { ratingFilter };
