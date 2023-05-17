import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const loggedRoutes = [/\/profile?\/?\w+/, /\/admin?\/?\w+/];

/**
 * The custom hook run a feature and navigate to some route
 * @param {Function} func
 * @param {string} route
 * @returns
 */
export const useNavigateDispatch = (func, route) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const action = () => {
    const changeRoute = loggedRoutes.some((item) => item.test(router.route));
    console.log(changeRoute);
    dispatch(func());
    if (changeRoute) {
      router.replace(route);
    }
  };

  return action;
};
