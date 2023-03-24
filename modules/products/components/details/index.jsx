import React from "react";
import { SiSpringsecurity } from "react-icons/si";
import { useSelector } from "react-redux";
import SpinnerLoader from "../../../../components/utils/loaders/spinner";
import ActionsButtons from "./actions";
import ImageSlider from "./images";
import { Card, CardContainer, Details, Price, Title } from "./styled";

function CardProduct({ product, loading }) {
  const user = useSelector((selector) => selector.user);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <CardContainer>
      <ImageSlider imgURL={product.imgURL} />
      <Card>
        <Title>
          <p>
            <SiSpringsecurity size={"20px"} />
            <span>Protected purchase</span>
          </p>
          <p className="name">{product.name}</p>
        </Title>
        <div className="line"></div>
        <Price>
          <span>$ </span>
          {product.price?.$numberDecimal}
        </Price>
        <Details>
          <p>
            <span>Description: </span>
            {product.description}
          </p>
        </Details>
        {user.logged ? (
          <ActionsButtons product={product} />
        ) : (
          <p>For shop, signin please</p>
        )}
      </Card>
    </CardContainer>
  );
}

export default CardProduct;
