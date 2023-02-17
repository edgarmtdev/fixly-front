import React from "react";
import Image from "./Image";
import ProductDescription from "./Description";
import { Header } from "./styled";

export default function Banner() {
  return (
    <Header>
      <ProductDescription />
      <Image />
    </Header>
  );
}
