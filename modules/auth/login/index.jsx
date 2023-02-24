import { Formik } from "formik";
import Link from "next/link";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { login } from "../../../features/user";
import useAuthDispatch from "../hooks/useAuthDispatch";
import FormCustom from "./components/form";
import ImageLogin from "./components/image";
import Input from "./components/input";
import SignupSchema from "./helpers/validationSchema";
import { Container } from "./styled";

export default function LoginModule({ user }) {
  const [signIn] = useAuthDispatch(login);

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={signIn}
      >
        <FormCustom>
          <h1>Login</h1>
          <section>
            <Input name="email" type="text" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
          </section>
          <button type="submit">
            {user.loading ? (
              <CgSpinner size={28} className="animate-spin" />
            ) : (
              <span>Submit</span>
            )}
          </button>
          <p className="label">
            No account?,{" "}
            <Link href={"/auth/signup"}>
              <span>Sign Up</span>
            </Link>
          </p>
        </FormCustom>
      </Formik>
      <ImageLogin />
    </Container>
  );
}
