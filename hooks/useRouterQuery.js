import { useRouter } from "next/router";

const useRouterQuery = () => {
  const router = useRouter();
  const { idProduct } = router.query;
  console.log(idProduct);
  return idProduct;
};

export default useRouterQuery;
