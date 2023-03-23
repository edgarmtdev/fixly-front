import React from "react";
import { SiSpringsecurity } from "react-icons/si";
import { useSelector } from "react-redux";
import ActionsButtons from "./actions";
import ImageSlider from "./images";
import {
  Card,
  CardContainer,
  CardLoading,
  Details,
  Price,
  Title,
} from "./styled";
import { CgSpinnerTwoAlt } from "react-icons/cg";

function CardProduct({ product, loading }) {
  const user = useSelector((selector) => selector.user);

  if (loading) {
    return (
      <CardLoading>
        <CgSpinnerTwoAlt size={50} color={"#3E5067"} />
      </CardLoading>
    );
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
          <h5>{product.name}</h5>
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
