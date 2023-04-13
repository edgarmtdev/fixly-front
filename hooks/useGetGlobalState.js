import { useSelector } from "react-redux";

export function useGetGlobalState(feature) {
  const data = useSelector((state) => state[feature]);
  return data;
}
