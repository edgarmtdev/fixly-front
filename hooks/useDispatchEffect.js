import { useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * Custom hook to run features from redux
 * @param {Array} features
 */
const useDispatchEffect = (features) => {
  const dispatch = useDispatch();

  useEffect(() => {
    features.map((feature) => dispatch(feature()));
  }, []);
};

export default useDispatchEffect;
