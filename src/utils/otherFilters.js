const otherFilters = (products, { inStock, bestseller, newest }) => {
  if (!inStock && !bestseller && !newest) {
    return products;
  }

  const filteredList = [];

  if (inStock) {
    let newList = products.filter(
      (product) => product.badgeTitle !== "Sold Out"
    );
    filteredList.push(...newList);
  }

  if (bestseller) {
    let newList = products.filter(
      (product) => product.badgeTitle === "Bestseller"
    );
    filteredList.push(...newList);
  }

  if (newest) {
    let newList = products.filter((product) => product.badgeTitle === "New");
    filteredList.push(...newList);
  }

  return filteredList;
};

export { otherFilters };
