import { Field, useField } from "formik";
import { InputContainer } from "./styled";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputContainer error={meta.error}>
      <div>
        <span>{label}</span>
        <Field {...field} {...props} />
      </div>
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </InputContainer>
  );
};

export default Input;
