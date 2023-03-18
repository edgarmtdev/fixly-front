import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import { BuyButton, Container, NotProducts, Title } from "./styles";

export default function MyCart({ products }) {
  const { total } = useSelector((state) => state.cart);

  return (
    <Container>
      <Title>Shop Cart</Title>
      {products.length > 0 ? (
        <>
          {products.map((item) => (
            <Card key={item.product._id} data={item} />
          ))}
          <p>total: ${total} </p>
          <BuyButton>BUY</BuyButton>
        </>
      ) : (
        <NotProducts>Not products</NotProducts>
      )}
    </Container>
  );
}
