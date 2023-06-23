import { createProduct } from "features";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function useUploadProduct() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  const onHandleSubmit = async (values) => {
    const data = {
      name: values.name,
      description: values.description,
      price: values.price,
      amount: values.amount,
      categories,
    };

    const formData = new FormData();
    formData.append("img", images[0].file);
    Object.entries(data).forEach((item) => formData.append(item[0], item[1]));

    dispatch(createProduct(formData));
  };

  const onChangeCategories = (value) => {
    const data = value.map((item) => item.value);
    setCategories(data);
  };

  const onChangeImages = (imageList) => {
    console.log(imageList);
    setImages(imageList);
  };

  return {
    onHandleSubmit,
    onChangeCategories,
    onChangeImages,
    images,
  };
}
