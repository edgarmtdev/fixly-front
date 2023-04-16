import AUTH_CONSTANTS from "config/constants/auth";
import { requestCookie } from "api";
import { parseCookies } from "nookies";

export async function validateSession(ctx) {
  // Obtén las cookies del navegador
  const cookies = parseCookies(ctx);

  if (cookies.token) {
    const config = {
      withCredentials: true,
      headers: {
        Cookie: ctx?.req.headers.cookie,
      },
    };
    const res = await requestCookie(AUTH_CONSTANTS.validation, config);
    return res.data;
  }
  return { success: false };
}
