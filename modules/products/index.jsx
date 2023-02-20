import React from "react";
import CardProduct from "./components/details";
import ScrollToTop from "../../hooks/components/ScrollToTop";
import { Container } from "./styled";

const DeatilsMod = ({ product }) => {
  return (
    <Container>
      <ScrollToTop />
      <CardProduct product={product} />
    </Container>
  );
};

export default DeatilsMod;
