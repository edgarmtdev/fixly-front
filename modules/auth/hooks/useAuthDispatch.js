import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const useAuthDispatch = (feature, route) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const signIn = (values) => {
    dispatch(feature(values)).then((res) => {
      if (!res.error) {
        setTimeout(() => router.push(route), 2000);
      }
    });
  };

  return [signIn];
};

export default useAuthDispatch;
