import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

/**
 * The custom hook run some feature and return a function to auth forms
 * @param {Function} feature
 * @param {string} route
 * @param {string} alternateRoute
 * @returns
 */
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
