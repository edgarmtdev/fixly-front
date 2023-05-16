import { useGetGlobalState } from "hooks";
import ToolbarAdmin from "../global/components/toolbar";
import Card from "../global/components/products/card";

export default function ProductsAdminModule() {
  const { products } = useGetGlobalState("product");
  return (
    <>
      <ToolbarAdmin title={"Products"} />
      <div className="mt-10 mx-10 flex gap-8">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </>
  );
}
