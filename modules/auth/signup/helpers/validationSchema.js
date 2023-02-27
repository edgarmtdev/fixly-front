import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().max(18, "Name too long").required("Required"),
  lastName: Yup.string().max(18, "Last name too long").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(8, "Too Long!")
    .required("Required"),
  passwordRepeat: Yup.string()
    .min(6, "Too Short!")
    .max(8, "Too Long!")
    .required("Required"),
  country: Yup.string().required("Required"),
});

export default SignUpSchema;
