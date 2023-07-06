import { get } from "api";

export async function getBalance() {
  const { data } = await get("/api/admin/balance");
  return data;
}
