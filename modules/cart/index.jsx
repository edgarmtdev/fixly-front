import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import SpinnerLoader from "../../components/utils/loaders/spinner";
import Card from "./card";
import { BuyButton, Container, NotProducts, Title } from "./styles";

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
      <div className="p-8">
        {products.length > 0 ? (
          <>
            {" "}
            <div>
              {products.map((item) => (
                <Card key={item.product._id} data={item} />
              ))}
              <div className="my-10 ml-auto flex">
                <p className=" text-2xl ml-auto">Total: ${total} </p>
              </div>
            </div>
            <div className="flex mt-10 pt-10">
              <BuyButton>Buy now</BuyButton>
            </div>
          </>
        ) : (
          <NotProducts>Not products</NotProducts>
        )}
      </div>
    </Container>
  );
}
