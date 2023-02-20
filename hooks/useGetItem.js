import React from "react";
import { get } from "../api";

const useGetItem = (id) => {
  const [item, setItem] = React.useState({});

  React.useEffect(() => {
    if (id) {
      get(`/api/products/${id}`).then((res) => {
        setItem(res.data?.product);
      });
    }
  }, [id]);

  return [item, setItem];
};

export default useGetItem;
