import React from "react";
import CardProduct from "./components/details";
import ScrollToTop from "../../hooks/components/ScrollToTop";
import { Container } from "./styled";
import PaymentsMethods from "./components/methods";
import Reviews from "./components/reviews";

const DeatilsMod = ({ product }) => {
  return (
    <Container>
      <ScrollToTop />
      <CardProduct product={product} />
      <PaymentsMethods />
      <Reviews numberOfReviews={20} />
    </Container>
  );
};

export default DeatilsMod;
