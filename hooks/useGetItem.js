import React from "react";
import { get } from "../api";

const useGetItem = (id) => {
  const [item, setItem] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      const getItem = async (id) => {
        const response = await get(`/api/products/${id}`);
        return response;
      };

      getItem(id).then((res) => {
        setTimeout(() => {
          setItem(res.data.product);
          setLoading(false);
        }, 2000);
      });
    }
  }, [id]);

  return [item, loading, setItem];
};

export default useGetItem;
