import AUTH_CONSTANTS from "config/constants/auth";
import { requestCookie } from "api";

export async function validateSession(ctx) {
  // Obtén las cookies del navegador
  const cookies = ctx?.req.headers.cookie;

  if (cookies) {
    const config = {
      withCredentials: true,
      headers: {
        Cookie: cookies,
      },
    };
    const { data } = await requestCookie(AUTH_CONSTANTS.validation, config);
    return data;
  }
  return null;
}
