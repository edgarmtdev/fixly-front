import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const loggedRoutes = [
  "/cart",
  "/profile",
  "/profile/reviews",
  "/profile/shops",
];

const useNavigateDispatch = (func, route) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const action = () => {
    const changeRoute = loggedRoutes.some((item) => item === router.route);
    dispatch(func());
    if (changeRoute) {
      router.replace(route);
    }
  };

  return { action };
};

export default useNavigateDispatch;
