import { createProduct } from "features";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function useUploadProduct(handleNotViewModal) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  const onHandleSubmit = async (values, { resetForm }) => {
    const data = {
      name: values.name,
      description: values.description,
      price: values.price,
      amount: values.amount,
      categories,
    };

    const formData = new FormData();
    images.forEach((image) => formData.append("img", image.file));
    Object.entries(data).forEach((item) => formData.append(item[0], item[1]));

    dispatch(createProduct(formData)).then(({ payload }) => {
      const { success } = payload;
      if (success) {
        alert("Guardado");
        resetForm();
        handleNotViewModal();
        setImages([]);
        setCategories([]);
      }
    });
  };

  const onChangeCategories = (value) => {
    const data = value.map((item) => item.value);
    setCategories(data);
  };

  const onChangeImages = (imageList) => {
    setImages(imageList);
  };

  return {
    onHandleSubmit,
    onChangeCategories,
    onChangeImages,
    images,
  };
}
