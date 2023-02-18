import React from "react";
import useRouterQuery from "../../hooks/useRouterQuery";
import DeatilsMod from "../../modules/products/details";

const ProductDetails = () => {
  const id = useRouterQuery();
  return <DeatilsMod id={id} />;
};

export default ProductDetails;
