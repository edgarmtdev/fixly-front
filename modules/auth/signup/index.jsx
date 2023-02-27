import useAuthDispatch from "../hooks/useAuthDispatch";
import { signUp } from "../../../features/user/";
import Link from "next/link";
import { Container } from "./styled";
import { Formik, Form } from "formik";
import Input from "../../../components/global/form/input";
import SignUpSchema from "./helpers/validationSchema";
import FormCustom from "./components/form";
import Button from "../../../components/global/form/button";

const SignUpModule = ({ user }) => {
  const [register] = useAuthDispatch(signUp);

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          passwordRepeat: "",
        }}
        // validationSchema={SignUpSchema}
        onSubmit={register}
      >
        <FormCustom>
          <h1>Register</h1>
          <section>
            <div>
              <Input name="name" type="text" placeholder="Name" />
              <Input name="email" type="text" placeholder="Email" />
              <Input name="password" type="password" placeholder="Password" />
              <Input
                name="passwordRepeat"
                type="password"
                placeholder="Repeat Password"
              />
            </div>
            <div>
              <Input name="lastName" type="text" placeholder="Last Name" />
              <Input name="country" type="text" placeholder="Country" />
            </div>
          </section>
          <Button user={user} title={"Signup"} />
        </FormCustom>
      </Formik>
    </Container>
  );
};

export default SignUpModule;
