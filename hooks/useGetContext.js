import { dropdownContext } from "context/dropdown";
import { useContext } from "react";

export function useGetDropdownContext() {
  const ctx = useContext(dropdownContext);
  return ctx;
}
