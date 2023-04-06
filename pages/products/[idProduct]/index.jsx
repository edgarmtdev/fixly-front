import React from "react";
import { HeadComponent } from "../../../components/utils/head";
import DeatilsMod from "../../../modules/products";
import useRouterQuery from "../../../hooks/useRouterQuery";
import useGetItem from "../../../hooks/useGetItem";

const ProductDetails = () => {
  const idProduct = useRouterQuery();
  const [product, loading] = useGetItem(idProduct, 500);
  return (
    <React.Fragment>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsMod product={product} loading={loading} />
    </React.Fragment>
  );
};

export default ProductDetails;
