import React from "react";
import useGetItem from "../../hooks/useGetItem";
import useRouterQuery from "../../hooks/useRouterQuery";
import DeatilsMod from "../../modules/products";

const ProductDetails = () => {
  const idProduct = useRouterQuery();
  const [product] = useGetItem(idProduct);
  return <DeatilsMod product={product} />;
};

export default ProductDetails;
