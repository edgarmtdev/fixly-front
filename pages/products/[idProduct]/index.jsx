import React from "react";
import { HeadComponent } from "components/utils/head";
import DeatilsModule from "modules/details";
import { useGetItem, useRouterQuery } from "hooks";

export default function ProductDetails() {
  const id = useRouterQuery("idProduct");
  const [product, loading] = useGetItem(id, 500);
  return (
    <React.Fragment>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsModule product={product} loading={loading} />
    </React.Fragment>
  );
}
