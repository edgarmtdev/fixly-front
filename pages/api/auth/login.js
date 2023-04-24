import { post } from "api";
import { AUTH_CONSTANTS } from "config/constants";
import { serialize } from "cookie";

export default async function login(req, res) {
  if (req.method === "POST") {
    console.log("Request", req.body);
    const { data } = await post(AUTH_CONSTANTS.login, req.body);

    console.log("Response", data);

    if (data.success) {
      const serialized = serialize("token", data.token, {
        httpOnly: true,
        // eslint-disable-next-line no-undef
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(new Date().setDate(new Date().getDate() + 7)),
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
      return res.status(200).json(data.user);
    }

    return res.status(401).json(data);
  }
  return res.json({ message: "Method not allowed" });
}
