import React from "react";

/**
 * Custom hook to fetch data from local data(data/products.json)
 * @param {string} id
 * @param {Array} data
 * @param {number} delay
 * @returns
 */
export const useGetItemLocal = (id, data, delay = 1000) => {
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
      }, delay);
    }
  }, [id]);

  return { product, loading };
};
