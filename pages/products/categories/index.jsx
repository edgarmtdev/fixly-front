import React from "react";
import { get } from "../../../api";
import ProductsLayout from "../../../components/layouts/products";
import { HeadComponent } from "../../../components/utils/head";

export async function getServerSideProps(context) {
  const cat = context?.query?.cat || "all";
  const response = await get(`/api/products/category?cat=${cat}`);
  return {
    props: {
      cat,
      products: response?.data,
    },
  };
}

export default function Products(props) {
  console.log(props.products);
  return (
    <React.Fragment>
      <HeadComponent title={"Products | Tools"} />
    </React.Fragment>
  );
}

Products.Layout = ProductsLayout;
