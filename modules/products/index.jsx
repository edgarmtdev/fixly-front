import React from "react";
import CardProduct from "./components/details";
import ScrollToTop from "../../hooks/components/ScrollToTop";
import { Container } from "./styled";
import PaymentsMethods from "./components/methods";
import Reviews from "./components/reviews";

const DeatilsMod = ({ product, loading }) => {
  return (
    <Container>
      <ScrollToTop />
      <CardProduct product={product} loading={loading} />
      <PaymentsMethods />
      <Reviews reviews={product?.reviews} loading={loading} />
    </Container>
  );
};

export default DeatilsMod;
