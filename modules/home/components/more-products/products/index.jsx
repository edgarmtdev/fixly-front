import React from "react";
import ProductCard from "./card";
import { FlexCont } from "./styled";

function FlexProducts({ products }) {
  return (
    <FlexCont>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <ProductCard key={index} product={product} />
          </div>
        );
      })}
    </FlexCont>
  );
}

export default FlexProducts;
