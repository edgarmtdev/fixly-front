import { createProduct } from "features";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function useUploadProduct() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const onhandleSubmit = (values) => {
    const data = {
      name: values.name,
      imgURL: [values.imgURL],
      price: values.price,
      amount: values.amount,
      categories,
    };
    dispatch(createProduct(data));
  };

  const onHandleChange = (value) => {
    const data = value.map((item) => item.value);
    setCategories(data);
  };

  return { onHandleChange, onhandleSubmit };
}
