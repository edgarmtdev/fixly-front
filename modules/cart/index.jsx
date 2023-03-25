import React from "react";
import { useSelector } from "react-redux";
import SpinnerLoader from "../../components/utils/loaders/spinner";
import ProductsComponent from "./products";
import { Container } from "./styles";

export default function MyCart({ products }) {
  const { total, loading } = useSelector((state) => state.cart);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Container>
      <ProductsComponent total={total} products={products} />
    </Container>
  );
}
