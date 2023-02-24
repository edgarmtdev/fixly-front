import { useDispatch } from "react-redux";

const useAuthDispatch = (feature, values) => {
  const dispatch = useDispatch();
  const signIn = (values) => {
    console.log(values);
    dispatch(feature(values));
  };

  return [signIn];
};

export default useAuthDispatch;
