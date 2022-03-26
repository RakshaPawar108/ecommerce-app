const sortProducts = (products, { sortBy }) => {
  let sortedProducts = [...products];

  const calcDiscount = (a) => {
    const discountedPrice = (
      a.price -
      (a.prodDiscount / 100) * a.price
    ).toFixed(0);

    return discountedPrice;
  };

  if (sortBy === "LOW_TO_HIGH") {
    sortedProducts = sortedProducts.sort((prod1, prod2) => {
      const prod1Price = prod1.prodDiscount ? calcDiscount(prod1) : prod1.price;
      const prod2Price = prod2.prodDiscount ? calcDiscount(prod2) : prod2.price;
      return Number(prod1Price) - Number(prod2Price);
    });
  } else if (sortBy === "HIGH_TO_LOW") {
    sortedProducts = sortedProducts.sort((prod1, prod2) => {
      const prod1Price = prod1.prodDiscount ? calcDiscount(prod1) : prod1.price;
      const prod2Price = prod2.prodDiscount ? calcDiscount(prod2) : prod2.price;
      return Number(prod2Price) - Number(prod1Price);
    });
  }

  return sortedProducts;
};

export { sortProducts };
