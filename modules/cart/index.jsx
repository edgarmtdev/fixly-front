import React from "react";
import { useSelector } from "react-redux";
import SpinnerLoader from "../../components/utils/loaders/spinner";
import ProductsComponent from "./products";
import { CartContainer } from "./styles";

export default function MyCart({ products }) {
  const { total, loading } = useSelector((state) => state.cart);

  if (loading) {
    return (
      <CartContainer>
        <SpinnerLoader />
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <ProductsComponent total={total} products={products} />
    </CartContainer>
  );
}
