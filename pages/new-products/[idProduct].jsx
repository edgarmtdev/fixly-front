import React from "react";
import { HeadComponent } from "components/utils/head";
import { useGetItemLocal, useRouterQuery } from "hooks/useGetItemLocal";
import DeatilsMod from "modules/products";
import data from "../../data/products.json";

const NewProductPage = () => {
  const id = useRouterQuery();
  const { product, loading } = useGetItemLocal(id, data[0].products);
  return (
    <React.Fragment>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsMod product={product} loading={loading} />
    </React.Fragment>
  );
};

export default NewProductPage;
