import { useRouter } from "next/router";

const useRouterQuery = () => {
  const router = useRouter();
  const { idProduct } = router.query;
  return idProduct;
};

export default useRouterQuery;
