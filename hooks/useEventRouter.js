import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const useEventRouter = (feature, route, alternateRoute) => {
  const { logged } = useSelector((selector) => selector.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const event = (props) => {
    if (logged) {
      dispatch(feature(props));
      router.replace(route);
      return;
    }
    router.replace(alternateRoute);
  };
  return event;
};

export default useEventRouter;
