import React from "react";

const useGetItemLocal = (id, data) => {
  const [products] = React.useState(data);
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      const found = products.find((item) => {
        const uuid = item.route.split("/")[2];
        if (uuid === id) {
          return item;
        }
      });
      setTimeout(() => {
        setProduct(found);
        setLoading(false);
      }, 1500);
    }
  }, [id]);

  return { product, loading };
};

export default useGetItemLocal;
