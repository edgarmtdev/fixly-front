import { Form } from "formik";
import { ContainerForm } from "./styled";

const FormCustom = ({ children }) => {
  return (
    <Form>
      <ContainerForm>{children}</ContainerForm>
    </Form>
  );
};
export default FormCustom;
