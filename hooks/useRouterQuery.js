import { useRouter } from "next/router";

/**
 * Hook to get param in dynamic routes
 * @returns
 */
const useRouterQuery = () => {
  const router = useRouter();
  const { idProduct } = router.query;
  return idProduct;
};

export default useRouterQuery;
