import { get } from "api";
import { CUSTOMERS_ADMIN_CONSTANTS } from "config/constants";

export async function getLastCustomers() {
  const { data } = await get(CUSTOMERS_ADMIN_CONSTANTS.getLastCustomers);
  return data;
}
