import { useGetGlobalState } from "hooks";
import { AiOutlineSearch } from "react-icons/ai";
import InputText from "../global/components/form/inputs/InputText";
import UploadProduct from "../global/components/modals/UploadProduct";
import Card from "../global/components/products/card";
import ToolbarAdmin from "../global/components/toolbar";
import { useViewModal } from "../hooks/useViewModal";
import { Button } from "./styled";
// import { useState } from "react";

export default function ProductsAdminModule() {
  const { products } = useGetGlobalState("product");

  // const [items, setItems] = useState(products);

  const { viewModal, handleViewModal, handleNotViewModal } = useViewModal();

  const searchProduct = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <ToolbarAdmin title={"Products"} />
      <div className="px-10 py-4 border-b-[1px] border-[#B3B3B3] min-h-[80px] flex items-center">
        <form className="w-[40%]">
          <InputText
            name={"search"}
            placeholder={"Search a product"}
            icon={<AiOutlineSearch />}
            event={searchProduct}
          />
        </form>
        <section className="ml-auto">
          <Button onClick={handleViewModal}>New Product</Button>
        </section>
      </div>
      <div className="mt-10 mx-10 flex gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
      <UploadProduct
        viewModal={viewModal}
        handleNotViewModal={handleNotViewModal}
      />
    </>
  );
}
