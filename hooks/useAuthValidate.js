import React from "react";
import { useDispatch } from "react-redux";
import { validation } from "../features/user";

const useAuthValidate = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(validation());
  }, []);
};

export default useAuthValidate;
