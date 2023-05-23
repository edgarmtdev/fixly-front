import { Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import InputField from "../form/inputs/InputField";

export default function UploadProduct({ handleNotViewModal }) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <section>
      <div
        onClick={handleNotViewModal}
        className="absolute z-20 top-0 bg-[#00000078] left-0 min-h-[100vh] w-[100%]"
      ></div>
      <div className="absolute z-30 top-0 left-0 bottom-0 right-0 m-auto bg-white w-[48rem] min-h-[75%] h-[75%] p-6 rounded-md shadow-xl">
        <section className="flex">
          <div>
            <h3>Upload product</h3>
          </div>
          <button className=" ml-auto" onClick={handleNotViewModal}>
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
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <InputField
                name="name"
                type="text"
                placeholder="Write product name..."
                label="Product name"
              />
            </Form>
          </Formik>
        </section>
      </div>
    </section>
  );
}
