import { Field, useField } from "formik";

export default function InputField({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div className=" flex flex-col gap-1">
      <label className="text-xs">{label}</label>
      <Field
        className="outline-primary-300 rounded text-xs p-2 w-[100%] border-[1px] border-primary_variant-100 transition duration-500"
        {...field}
        {...props}
      />
    </div>
  );
}
