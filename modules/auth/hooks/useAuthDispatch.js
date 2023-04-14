import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const useFormDispatch = (feature, route) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const event = (values) => {
    dispatch(feature(values)).then((res) => {
      if (!res.error) {
        setTimeout(() => router.push(route), 2000);
      }
    });
  };

  return { event };
};

export default useFormDispatch;
