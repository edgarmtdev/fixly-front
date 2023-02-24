import React from "react";
import { Field, useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div>
      <div className="input">
        <Field {...field} {...props} />
      </div>
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
};

export default Input;
