import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import InputField from "../form/inputs/InputField";

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export default function UploadProduct({ viewModal, handleNotViewModal }) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <motion.section animate={viewModal ? show : hide}>
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
    </motion.section>
  );
}
