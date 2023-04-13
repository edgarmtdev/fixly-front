import React from "react";
import ProductsLayout from "../../../components/layouts/products";
import { HeadComponent } from "../../../components/utils/head";

export default function Products() {
  return (
    <React.Fragment>
      <HeadComponent title={"Products | Tools"} />
      <div className="mt-20">Hello</div>
    </React.Fragment>
  );
}

export async function getServerSideProps({ query }) {
  const cat = query?.cat || "all";
  // const response = await get(`/api/products/category?cat=${cat}`);
  return {
    props: {
      cat,
    },
  };
}

Products.Layout = ProductsLayout;
