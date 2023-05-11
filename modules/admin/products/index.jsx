import { useGetGlobalState } from "hooks";
import ProductCard from "components/global/products/card";
import ToolbarAdmin from "../global/components/toolbar";

export default function ProductsAdminModule() {
  const { products } = useGetGlobalState("product");
  return (
    <section className="p-4">
      <ToolbarAdmin title={"Products"} />
      <div className="mt-10 p-4 flex gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
