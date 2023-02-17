import React from "react";
import { useDispatch } from "react-redux";

const useDispatchEffect = (features) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    features.map((feature) => dispatch(feature()));
  }, []);
};

export default useDispatchEffect;
