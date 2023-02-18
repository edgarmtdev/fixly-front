import { useRouter } from "next/router";

const useRouterQuery = () => {
  const router = useRouter();
  const { id } = router.query;

  return id;
};

export default useRouterQuery;
