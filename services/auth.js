import { AUTH_CONSTANTS } from "config/constants/index";
// import { requestCookie } from "api";
// import { parseCookies } from "nookies";

export async function validateSession(cookie) {
  const config = {
    withCredentials: true,
    headers: {
      Cookie: `token=${cookie}`,
    },
  };
  try {
    // Obtén las cookies del navegador
    // const cookies = parseCookies(ctx);

    // console.log(ctx?.req.headers.cookie);
    const res = await fetch(
      `http://localhost:4000${AUTH_CONSTANTS.validation}`,
      config
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({ ...error });
    return error;
  }
}
