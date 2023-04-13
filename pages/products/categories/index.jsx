import React from "react";
import { get, post } from "../../../api";
import ProductsLayout from "../../../components/layouts/products";
import { HeadComponent } from "../../../components/utils/head";
import AUTH_CONSTANTS from "config/constants/auth";

export default function Products(props) {
  console.log(props);
  return (
    <React.Fragment>
      <HeadComponent title={"Products | Tools"} />
    </React.Fragment>
  );
}

export async function getServerSideProps({ req, res, query }) {
  const cat = query?.cat || "all";
  // const response = await get(`/api/products/category?cat=${cat}`);

  console.log(req.cookies.token);
  return {
    props: {
      cat,
    },
  };
}

Products.Layout = ProductsLayout;
