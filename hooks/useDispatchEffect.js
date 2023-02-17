import React from "react";
import { useDispatch } from "react-redux";

const useDispatchEffect = (feature) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(feature());
  }, []);
};

export default useDispatchEffect;
