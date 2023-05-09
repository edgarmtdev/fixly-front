import { get } from "api";
import ProductsLayout from "components/layouts/products";
import { HeadComponent } from "components/utils/head";
import ProductsModule from "modules/products";

export default function Products({ categorie, response }) {
  return (
    <>
      <HeadComponent title={`${categorie}`} />
      <ProductsModule products={response.data} categorie={categorie} />
    </>
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
