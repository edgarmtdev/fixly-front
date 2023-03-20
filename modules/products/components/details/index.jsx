import React from "react";
import { useSelector } from "react-redux";
import ActionsButtons from "./actions";
import { CardContainer, Card, Title, Price, Details } from "./styled";

function CardProduct({ product }) {
  const user = useSelector((selector) => selector.user);

  return (
    <CardContainer>
      <div>
        <img src={`${product.imgURL}`} alt="product" />
      </div>
      <Card>
        <Title>{product.name}</Title>
        <div className="line"></div>
        <Price>
          <span>$ </span>
          {product.price}.00
        </Price>
        <Details>
          <span>Description:</span> {product.description}
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
