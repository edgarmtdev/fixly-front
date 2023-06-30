import { useGetGlobalState } from "hooks";
import { AiOutlineSearch } from "react-icons/ai";
import InputText from "../../components/inputs/InputText";
import Card from "../../components/products/card";
import ToolbarAdmin from "../../components/toolbar";
import { Button } from "./styled";

export default function ProductsAdminModule({ handleViewModal }) {
  const { products } = useGetGlobalState("product");

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
      <div className="mt-10 mx-10 flex flex-wrap gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </>
  );
}
