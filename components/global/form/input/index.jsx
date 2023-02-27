import React from "react";
import { Field, useField } from "formik";
import { InputContainer } from "./styled";

const Input = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <InputContainer error={meta.error}>
      <div>
        <Field {...field} {...props} />
      </div>
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </InputContainer>
  );
};

export default Input;
