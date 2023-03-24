import React from "react";
import { useSelector } from "react-redux";
import SpinnerLoader from "../../components/utils/loaders/spinner";
import Card from "./card";
import { BuyButton, Container, NotProducts, Title } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function MyCart({ products }) {
  const { total, loading } = useSelector((state) => state.cart);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Container>
      <Title>
        {" "}
        <AiOutlineShoppingCart size={40} />
        <p>Shop cart</p>
      </Title>
      <div className=" p-8">
        {products.length > 0 ? (
          <>
            {products.map((item) => (
              <Card key={item.product._id} data={item} />
            ))}
            <p>total: ${total} </p>
            <BuyButton>Buy now</BuyButton>
          </>
        ) : (
          <NotProducts>Not products</NotProducts>
        )}
      </div>
    </Container>
  );
}
