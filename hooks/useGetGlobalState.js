import { useSelector } from "react-redux";

/**
 * Custom hook to get data from global state of redux
 * @param {Function} feature
 * @returns
 */
export function useGetGlobalState(feature) {
  const data = useSelector((state) => state[feature]);
  return data;
}
