import React from "react";
import { CardModule, NotProducts, Title, BuyButton } from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ContentComponent from "./content";

const ProductsComponent = ({ total, products }) => {
  return (
    <CardModule>
      <Title>
        <AiOutlineShoppingCart size={40} />
        <p>Shop cart</p>
      </Title>
      <ContentComponent products={products} total={total} />
    </CardModule>
  );
};

export default ProductsComponent;
