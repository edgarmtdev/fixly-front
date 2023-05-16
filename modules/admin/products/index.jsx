import { useGetGlobalState } from "hooks";
import { useState } from "react";
import Card from "../global/components/products/card";
import ToolbarAdmin from "../global/components/toolbar";
import { Button } from "./styled";

export default function ProductsAdminModule() {
  const { products } = useGetGlobalState("product");

  const [viewModal, setViewModal] = useState(false);

  const handleViewModal = () => setViewModal((state) => !state);

  return (
    <>
      <ToolbarAdmin title={"Products"} />
      <div className="px-10 py-4 border-b-[1px] border-[#B3B3B3] min-h-[80px] grid grid-cols-2 items-center">
        <form className="">
          <input
            onKeyUp={(e) => console.log(e.target.value)}
            className="outline-primary-300 text-xs p-2 w-[80%] hover:border-[1px] hover:border-primary-300 transition duration-500"
            type="text"
            name="search"
            placeholder="Search a product"
          />
        </form>
        <section className="ml-auto">
          <Button onClick={handleViewModal}>New Product</Button>
        </section>
      </div>
      {viewModal && <div className="absolute bg-white top-0 left-0">modal</div>}
      <div className="mt-10 mx-10 flex gap-8">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </>
  );
}
