import Link from "next/link";
import React from "react";
import ProductCard from "./Card";
import { FlexCont } from "./styled";

function FlexProducts({ products }) {
  return (
    <FlexCont>
      {products.map((product, index) => (
        <Link href={`/products/${product._id}`}>
          <ProductCard key={index} product={product} />
        </Link>
      ))}
    </FlexCont>
  );
}

export default FlexProducts;
