import { post } from "api";
import { AUTH_CONSTANTS } from "config/constants";
import { setCookie } from "nookies";

export default async function login(req, res) {
  if (req.method === "POST") {
    const { data } = await post(AUTH_CONSTANTS.login, req.body);
    console.log(data);
    setCookie({ req }, "token", data.token, {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      secure: true,
    });

    return res.json(data.user);
  }
  return null;
}
