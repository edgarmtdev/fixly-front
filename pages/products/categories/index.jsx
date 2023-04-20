import React from "react";
import ProductsLayout from "components/layouts/products";
import { HeadComponent } from "components/utils/head";
import { get } from "api";
import ProductsModule from "modules/products";

export default function Products({ categorie, products }) {
  return (
    <React.Fragment>
      <HeadComponent title={`${categorie}`} />
      <ProductsModule products={products} />
    </React.Fragment>
  );
}

export async function getServerSideProps({ query }) {
  const categorie = query?.cat || "all";
  const response = await get(`/api/products/category/type?cat=${categorie}`);
  return {
    props: {
      categorie,
      products: response.data,
    },
  };
}

Products.Layout = ProductsLayout;
