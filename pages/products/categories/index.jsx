import React from "react";
import ProductsLayout from "components/layouts/products";
import { HeadComponent } from "components/utils/head";
import { get } from "api";
import ProductsModule from "modules/products";

export default function Products({ categorie, response }) {
  return (
    <React.Fragment>
      <HeadComponent title={`${categorie}`} />
      <ProductsModule products={response.data} categorie={categorie} />
    </React.Fragment>
  );
}

export async function getServerSideProps({ query }) {
  const categorie = query?.cat || "all";
  const response = await get(`/api/products/categories/type?cat=${categorie}`);
  return {
    props: {
      categorie,
      response: response.data,
    },
  };
}

Products.Layout = ProductsLayout;
