import { Formik } from "formik";
import React from "react";
import Input from "../../../components/global/form/input";
import { login } from "../../../features/user";
import useAuthDispatch from "../hooks/useAuthDispatch";
import Button from "../../../components/global/form/button";
import FormCustom from "./components/form";
import ImageLogin from "./components/image";
import SignInSchema from "./helpers/validationSchema";
import { Container } from "./styled";
import LabelComponent from "./components/label";

export default function LoginModule({ user }) {
  const [signIn] = useAuthDispatch(login);

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
          <h1>Login</h1>
          <section>
            <Input name="email" type="text" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
          </section>
          <Button user={user} title={"Sing In"} />
          <LabelComponent />
        </FormCustom>
      </Formik>
      <ImageLogin />
    </Container>
  );
}
