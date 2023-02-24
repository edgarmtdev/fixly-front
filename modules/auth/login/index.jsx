import { Field, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgSpinner } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { login } from "../../../features/user";
import FormCustom from "./components/form";
import SignupSchema from "./helpers/validationSchema";
import { Container } from "./styled";

export default function LoginModule({ user }) {
  const dispatch = useDispatch();
  const signIn = (values) => {
    console.log(values);
    dispatch(login(values));
  };

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
        {({ errors, touched }) => (
          <FormCustom>
            <h1>Login</h1>
            <section className="container">
              <div>
                <div className="input">
                  <Field name="email" type="text" placeholder="Email" />
                </div>
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
              </div>
              <div>
                <div className="input">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                {errors.password && touched.password ? (
                  <span>{errors.password}</span>
                ) : null}
              </div>
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
        )}
      </Formik>
      <div className="grid place-items-center">
        <Image src="/images/loginImg.svg" alt="" width={350} height={250} />
      </div>
    </Container>
  );
}
