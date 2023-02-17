import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const useNavigateDispatch = (func, route) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const action = () => {
    dispatch(func());
    router.replace(route);
  };

  return { action };
};

export default useNavigateDispatch;
