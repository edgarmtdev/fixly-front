import { useDispatch } from "react-redux";

/**
 * The function run a callback of redux
 * @param {Function} callback
 * @returns
 */
export const useSendData = (callback) => {
  const dispatch = useDispatch();

  dispatch(callback());
  return;
};
