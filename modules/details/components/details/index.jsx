// import { useEffect, useState } from "react";
import ActionsButtons from "./actions";
import ImageSlider from "./images";
import { Card, CardContainer, Details, Price } from "./styled";
import TitleProduct from "./tittle";
import SpinnerLoader from "/components/utils/loaders/spinner";

function CardProduct({ product, loading }) {
  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <CardContainer>
      <ImageSlider images={product?.imgURL} />
      <Card>
        <TitleProduct productName={product?.name} />
        <Price>
          <span>$ </span>
          {product?.price?.$numberDecimal || product?.price}
        </Price>
        <Details>
          <p>
            <span>Description: </span>
            {product?.description}
          </p>
        </Details>
        <ActionsButtons product={product} />
      </Card>
    </CardContainer>
  );
}

export default CardProduct;
