import AUTH_CONSTANTS from "config/constants/auth";
import { requestCookie } from "api";
// import { parseCookies } from "nookies";

export async function validateSession(ctx) {
  try {
    // Obtén las cookies del navegador
    // const cookies = parseCookies(ctx);

    const config = {
      withCredentials: true,
      headers: {
        Cookie: ctx?.req.headers.cookie,
      },
    };
    const res = await requestCookie(AUTH_CONSTANTS.validation, config);
    return res.data;
  } catch (error) {
    console.log(error.response.data);
    return error?.response?.data;
  }
}
