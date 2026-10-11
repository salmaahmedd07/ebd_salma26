// 08-async — Exercise

import { findProduct, findAllProducts } from "./fake-db.js";

// 1. Get the name of a product
export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

// 2. Get a product's price label
export async function priceLabel(id) {
  const product = await findProduct(id);
  return `${product.name} costs ${product.price} EGP`;
}

// 3. Get the product name safely
export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch (error) {
    return "Not found";
  }
}

// 4. Get the names of products that are in stock
export async function namesInStock() {
  const products = await findAllProducts();

  return products
    .filter(product => product.inStock)
    .map(product => product.name);
}