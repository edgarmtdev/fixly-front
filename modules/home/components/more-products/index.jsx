import Link from "next/link";
import React from "react";
import FlexProducts from "./products";
import { MoreProductsCont, Title } from "./styled";

export default function MoreProducts({ products }) {
  return (
    <MoreProductsCont>
      <Title>More products</Title>
      <FlexProducts products={products} />
      {/* <Link href={`/products/${products[0]._id}`}>
        <button>Click</button>
      </Link> */}
    </MoreProductsCont>
  );
}
