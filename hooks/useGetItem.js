import React from "react";
import { get } from "../api";

const useGetItem = (id) => {
  const [item, setItem] = React.useState();

  const getProduct = async () => {
    const resp = await get(`/api/products/${id}`);
    setItem(resp.data.product);
  };

  React.useEffect(getProduct(), [id]);

  console.log(item);

  return { item, setItem };
};

export default useGetItem;
