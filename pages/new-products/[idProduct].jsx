import { HeadComponent } from "components/utils/head";
import { useGetItemLocal, useRouterQuery } from "hooks";
import DeatilsModule from "modules/details";
import data from "../../data/products.json";

const NewProductPage = () => {
  const id = useRouterQuery();
  const { product, loading } = useGetItemLocal(id, data[0].products);
  return (
    <>
      <HeadComponent title={`${product?.name || "Details"} | Fixly`} />
      <DeatilsModule product={product} loading={loading} />
    </>
  );
};

export default NewProductPage;
