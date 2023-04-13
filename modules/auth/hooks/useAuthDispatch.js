import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const useAuthDispatch = (feature, route) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const signIn = (values) => {
    dispatch(feature(values));
    router.push(route);
  };

  return [signIn];
};

export default useAuthDispatch;
