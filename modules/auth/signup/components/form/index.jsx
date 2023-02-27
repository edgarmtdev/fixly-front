import { Form } from "formik";
import { Container } from "./styled";

const FormCustom = ({ children }) => {
  return (
    <Form>
      <Container>{children}</Container>
    </Form>
  );
};
export default FormCustom;
