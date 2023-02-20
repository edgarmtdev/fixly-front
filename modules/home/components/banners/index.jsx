import React from "react";
import Image from "./image";
import ProductDescription from "./description";
import { Header } from "./styled";

export default function Banner() {
  return (
    <Header>
      <ProductDescription />
      <Image />
    </Header>
  );
}
