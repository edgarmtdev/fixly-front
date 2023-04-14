import Button from "components/global/form/button";
import Input from "components/global/form/input";
import { signUp } from "features/user/";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import useFormDispatch from "../hooks/useAuthDispatch";
import FormCustom from "./components/form";
import SignUpSchema from "./helpers/validationSchema";
import { Container, ErrorMessage } from "./styled";

const SignUpModule = ({ user }) => {
  const { event: register } = useFormDispatch(signUp, "/");

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
            <Input
              name="name"
              type="text"
              placeholder="Write your name..."
              label={"Name"}
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Write your lastname..."
              label={"LastName"}
            />
            <Input name="country" type="text" label={"Country"} />
            <Input
              name="email"
              type="text"
              placeholder="Write your email..."
              label={"Email"}
            />
            <Input
              name="password"
              type="password"
              placeholder="Make a password..."
              label={"Password"}
            />
            <Input
              name="passwordRepeat"
              type="password"
              placeholder="Repeat the password..."
              label={"Password repeat"}
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
