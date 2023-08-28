import { get } from "api";
import { BALANCE_ADMIN_CONSTANTS } from "config/constants";

export async function getBalance() {
  const { data } = await get(BALANCE_ADMIN_CONSTANTS.getBalance);
  return data;
}
