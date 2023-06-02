import { createProduct } from "features";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "services/uploadImage";

export function useUploadProduct() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);

  const onHandleSubmit = async (values) => {
    const imgURL = await uploadImage(images);
    const data = {
      name: values.name,
      imgURL,
      description: values.description,
      price: values.price,
      amount: values.amount,
      categories,
    };
    console.log(data);

    dispatch(createProduct(data));
  };

  const onHandleChangeCategories = (value) => {
    const data = value.map((item) => item.value);
    setCategories(data);
  };

  const onHandleChangeImages = (image) => {
    setImages([...images, image[0].file]);
    setImage(image);
  };

  return {
    onHandleSubmit,
    onHandleChangeCategories,
    onHandleChangeImages,
    image,
  };
}
