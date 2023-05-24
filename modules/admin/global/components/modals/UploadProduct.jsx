import { Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import InputField from "../form/inputs/InputField";
import ContainerMotion from "./ContainerMotion";
import { useDispatch } from "react-redux";
import { createProduct } from "features";
import Select from "react-select";
import { useId } from "react";

const options = [
  { value: "Food", label: "Food" },
  { value: "Being Fabulous", label: "Being Fabulous" },
  { value: "Ken Wheeler", label: "Ken Wheeler" },
  { value: "ReasonML", label: "ReasonML" },
  { value: "Unicorns", label: "Unicorns" },
  { value: "Kittens", label: "Kittens" },
];

export default function UploadProduct({ viewModal, handleNotViewModal }) {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      imgURL: [values.imgURL],
      price: values.price,
      amount: values.amount,
      categories: ["Tools"],
    };
    dispatch(createProduct(data));
  };

  return (
    <ContainerMotion visible={viewModal}>
      <div
        onClick={handleNotViewModal}
        className="absolute z-20 top-0 bg-[#00000078] left-0 min-h-[100vh] w-[100%]"
      ></div>
      <div className="absolute z-30 top-0 left-0 bottom-0 right-0 m-auto bg-white w-[48rem] min-h-[75%] h-[75%] p-6 rounded-md shadow-xl">
        <section className="flex">
          <div>
            <h3>Upload product</h3>
          </div>
          <button className="ml-auto" onClick={handleNotViewModal}>
            <IoMdClose
              className="text-primary_variant-200 hover:text-primary-400"
              size={20}
            />
          </button>
        </section>
        <section className=" mt-10">
          <Formik
            initialValues={{
              name: "",
              imgURL: [],
              price: 0.0,
              amount: 0,
              categories: [],
            }}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-7">
              <InputField
                name="name"
                type="text"
                placeholder="Write product name..."
                label="Product name"
              />
              <InputField
                name="imgURL"
                type="text"
                placeholder="Set a url image"
                label="Image"
              />
              <InputField
                name="price"
                type="number"
                placeholder="Write the product price..."
                label="Price"
              />
              <InputField
                name="amount"
                type="number"
                placeholder="Write the amount price..."
                label="Amount"
              />
              <Select
                id="categories"
                placeholder="Categories"
                options={options}
                isMulti={true}
                className="text-sm"
                instanceId={useId()}
                name="categories"
              />
              <button className="" type="submit">
                Enviar
              </button>
            </Form>
          </Formik>
        </section>
      </div>
    </ContainerMotion>
  );
}
