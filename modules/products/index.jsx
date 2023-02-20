import React from "react";
import { useDispatch } from "react-redux";
import CardProduct from "./components/details";
import ScrollToTop from "../../hooks/components/ScrollToTop";
import useGetItem from "../../hooks/useGetItem";
import { Container } from "./styled";
import { getProduct } from "../../features/product";

function DeatilsMod({ product }) {
  return (
    <Container>
      <ScrollToTop />
      <CardProduct product={product} />
    </Container>
  );
}

export default DeatilsMod;
