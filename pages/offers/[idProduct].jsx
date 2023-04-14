import React from "react";
import { HeadComponent } from "components/utils/head";
import useGetItemLocal from "hooks/useGetItemLocal";
import useRouterQuery from "hooks/useRouterQuery";
import data from "../../data/products.json";
import DeatilsModule from "modules/details";

const ProductOffert = () => {
  const id = useRouterQuery();
  const { product, loading } = useGetItemLocal(id, data[1].products, 400);
  return (
    <React.Fragment>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsModule product={product} loading={loading} />
    </React.Fragment>
  );
};

export default ProductOffert;
