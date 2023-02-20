import React from "react";
import ProductDescription from "./description";
import BannerImage from "./image";
import { Header } from "./styled";

export default function Banner() {
  return (
    <Header>
      <ProductDescription />
      <BannerImage />
    </Header>
  );
}
