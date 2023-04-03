import React, { createContext, useState } from "react";
import data from "../src/data/products.json";

const productsMockup = data;

export const productsContext = createContext();

export default function ProductsContext({ children }) {
  const [products] = useState(productsMockup);

  return (
    <productsContext.Provider value={{ products: products }}>
      {children}
    </productsContext.Provider>
  );
}
