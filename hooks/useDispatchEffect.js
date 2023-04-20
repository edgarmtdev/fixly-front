import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useDispatchEffect = (features) => {
  const dispatch = useDispatch();

  useEffect(() => {
    features.map((feature) => dispatch(feature()));
  }, []);
};

export default useDispatchEffect;
