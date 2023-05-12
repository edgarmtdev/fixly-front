import { useGetGlobalState } from "hooks";
import ProductCard from "components/global/products/card";
import ToolbarAdmin from "../global/components/toolbar";

export default function ProductsAdminModule() {
  const { products } = useGetGlobalState("product");
  return (
    <section>
      <ToolbarAdmin title={"Products"} />
      <div className="mt-10 mx-10 flex gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
