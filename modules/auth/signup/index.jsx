import useAuthDispatch from "../hooks/useAuthDispatch";
import { signUp } from "../../../features/user/";
import { Container, ErrorMessage } from "./styled";
import { Formik } from "formik";
import Input from "../../../components/global/form/input";
import SignUpSchema from "./helpers/validationSchema";
import FormCustom from "./components/form";
import Button from "../../../components/global/form/button";
import { useSelector } from "react-redux";

const SignUpModule = ({ user }) => {
  const [register] = useAuthDispatch(signUp, "/");

  const {
    auth: {
      signup: { message },
    },
  } = useSelector((state) => state.user);

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          passwordRepeat: "",
          country: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={register}
      >
        <FormCustom>
          <p>Register</p>
          <section>
            <Input name="name" type="text" placeholder="Name" />
            <Input name="lastName" type="text" placeholder="Last Name" />
            <Input name="country" type="text" placeholder="Country" />
            <Input name="email" type="text" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Input
              name="passwordRepeat"
              type="password"
              placeholder="Repeat Password"
            />
          </section>
          <ErrorMessage>{message && message}</ErrorMessage>
          <Button user={user} title={"Signup"} />
        </FormCustom>
      </Formik>
    </Container>
  );
};

export default SignUpModule;
