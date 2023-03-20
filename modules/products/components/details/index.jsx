import React from "react";
import { useSelector } from "react-redux";
import ActionsButtons from "./actions";
import { CardContainer, Card, Title, Price, Details } from "./styled";
import { SiSpringsecurity } from "react-icons/si";
import ImageSlider from "./images";

function CardProduct({ product }) {
  const user = useSelector((selector) => selector.user);

  return (
    <CardContainer>
      <ImageSlider imgURL={product.imgURL} />
      <Card>
        <Title>
          <p>
            <SiSpringsecurity />
            <span>Protected purchase</span>
          </p>
          <h5>{product.name}</h5>
        </Title>
        <div className="line"></div>
        <Price>
          <span>$ </span>
          {product.price}.00
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
