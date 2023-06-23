import * as Yup from "yup";

const UploadProductSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string()
    .min(20, "Too Short!")
    .max(250, "Too Long!")
    .required("The description is required"),
  price: Yup.number().required("Price required"),
  amount: Yup.number().required("Amount required"),
  categories: Yup.array().required("Select at least one option"),
});

export default UploadProductSchema;
