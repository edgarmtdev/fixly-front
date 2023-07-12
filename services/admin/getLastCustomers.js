import { get } from "api";

export async function getLastCustomers() {
  const { data } = await get("/api/admin/customers");
  return data;
}
