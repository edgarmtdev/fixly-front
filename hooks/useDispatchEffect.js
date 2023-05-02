import { useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * Custom hook to run features from redux
 * @param {Array} features
 */
export const useDispatchEffect = (features) => {
  const dispatch = useDispatch();

  useEffect(() => {
    features.map((feature) => dispatch(feature()));
  }, []);
};
