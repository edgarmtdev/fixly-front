import React from "react";
import ProductsLayout from "../../../components/layouts/products";
import { HeadComponent } from "../../../components/utils/head";

export default function Products({ categorie }) {
  return (
    <React.Fragment>
      <HeadComponent title={`${categorie}`} />
      <div className="mt-10 ">Hello</div>
    </React.Fragment>
  );
}

export async function getServerSideProps({ query }) {
  const categorie = query?.cat || "all";
  // const response = await get(`/api/products/category?cat=${categorie}`);
  return {
    props: {
      categorie,
    },
  };
}

Products.Layout = ProductsLayout;
