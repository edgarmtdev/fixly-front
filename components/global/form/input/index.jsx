import { Field, useField } from "formik";
import { InputContainer, Label } from "./styled";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputContainer error={meta.error}>
      <Label>{label}</Label>
      <div>
        <Field {...field} {...props} />
      </div>
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </InputContainer>
  );
};

export default Input;
