import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const useFormDispatch = (feature, route, delay = 1000) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const event = (values) => {
    dispatch(feature(values)).then((res) => {
      if (!res.error) {
        setTimeout(() => router.push(route), delay);
      }
    });
  };

  return { event };
};

export default useFormDispatch;
