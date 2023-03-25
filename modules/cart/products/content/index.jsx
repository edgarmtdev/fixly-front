import React from "react";
import BuyNowComponent from "./button";
import Card from "./card";
import { ContainerContent, NotProducts } from "./styled";
import TotalComponent from "./total";

const ContentComponent = ({ products, total }) => {
  return (
    <ContainerContent>
      {products.length > 0 ? (
        <>
          <div>
            {products.map((item) => (
              <Card key={item.product._id} data={item} />
            ))}
            <TotalComponent total={total} />
          </div>
          <BuyNowComponent />
        </>
      ) : (
        <NotProducts>Not products</NotProducts>
      )}
    </ContainerContent>
  );
};

export default ContentComponent;
