const productsArray = [
  { id: 1, title: 'Product 1', price: 100 },
  { id: 2, title: 'Product 2', price: 200 },
  { id: 3, title: 'Product 3', price: 300 },
];

function getProductData(id) {
  let productData = productArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log('Product not found');
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
