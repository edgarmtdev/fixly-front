import React from "react";
import Price from "../../Utilities/Price";
import { Card, Name } from "./styled";

function Product({ data }) {
  return (
    <div>
      <Card>
        <Price price={data?.price} />
        <img src={data?.img[0]} alt="" />
      </Card>
      <Name>{data?.name}</Name>
    </div>
  );
}

export default Product;
