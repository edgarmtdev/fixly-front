import useAuthDispatch from "../hooks/useAuthDispatch";
import { signUp } from "../../../features/user/";
import Link from "next/link";
import { Container } from "./styled";
import { Formik, Form } from "formik";
import Input from "../../../components/global/form/input";
import SignUpSchema from "./helpers/validationSchema";

const SignUpModule = ({ user }) => {
  const [register] = useAuthDispatch(signUp);

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={register}
      >
        <Form>
          <h1>Register</h1>
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
        </Form>
      </Formik>
    </Container>
  );
};

export default SignUpModule;
