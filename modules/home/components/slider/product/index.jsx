import React from "react";
import Price from "../../utilities/price";
import { Card, Name } from "./styled";

function Product({ data }) {
  return (
    <React.Fragment>
      <Card>
        <Price price={data?.price} />
        <img src={`${data.img[0]}`} alt={data.name} width={288} height={288} />
      </Card>
      <Name>{data?.name}</Name>
    </React.Fragment>
  );
}

export default Product;
