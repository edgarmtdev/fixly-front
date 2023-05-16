import { useRouter } from "next/router";

/**
 * Hook to get param in dynamic routes
 * @returns
 */
export const useRouterQuery = (nameQuery) => {
  const router = useRouter();
  const { [nameQuery]: query } = router.query;
  return query;
};
