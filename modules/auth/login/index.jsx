import Button from "components/global/form/button";
import Input from "components/global/form/input";
import { login } from "features/user";
import { Formik } from "formik";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoMdAlert } from "react-icons/io";
import { useSelector } from "react-redux";
import useAuthDispatch from "../hooks/useAuthDispatch";
import FormCustom from "./components/form";
import ImageLogin from "./components/image";
import LabelComponent from "./components/label";
import SignInSchema from "./helpers/validationSchema";
import { Container, ErrorMessage, Message } from "./styled";

export default function LoginModule({ user }) {
  const { event: signIn } = useAuthDispatch(login, "/");

  const {
    message: authValue,
    auth: {
      login: { message },
    },
  } = useSelector((state) => state.user);

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        <FormCustom>
          <p className="title">Login</p>
          {message && (
            <ErrorMessage>
              <IoMdAlert size={18} />
              {message}
            </ErrorMessage>
          )}
          {authValue && (
            <Message>
              <AiFillCheckCircle size={18} />
              {authValue}
            </Message>
          )}
          <section>
            <Input
              name="email"
              type="text"
              placeholder="Write your email..."
              label={"Email"}
            />
            <Input
              name="password"
              type="password"
              placeholder="Write yout password..."
              label={"Password"}
            />
          </section>
          <Button user={user} title={"Sing In"} size={"xl"} />
          <LabelComponent />
        </FormCustom>
      </Formik>
      <ImageLogin />
    </Container>
  );
}
