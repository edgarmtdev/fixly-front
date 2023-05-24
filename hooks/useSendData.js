import { useDispatch } from "react-redux";

/**
 * The function run a callback of redux
 * @param {Function} feature
 * @returns
 */
export const useSendData = (feature) => {
  const dispatch = useDispatch();

  dispatch(feature());
  return;
};
