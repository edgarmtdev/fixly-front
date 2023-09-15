import { HeadComponent } from "components/utils/head";
import { useGetItemLocal, useRouterQuery } from "hooks";
import DeatilsModule from "modules/details";
import data from "../../data/products.json";

const ProductOffert = () => {
  const id = useRouterQuery("idProduct");
  const { product, loading } = useGetItemLocal(id, data[1].products, 400);
  return (
    <>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsModule product={product} loading={loading} />
    </>
  );
};

export default ProductOffert;
