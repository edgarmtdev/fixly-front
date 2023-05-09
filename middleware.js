import { NextResponse } from "next/server";
import { validateSession } from "services/auth";

export async function middleware(req) {
  const cookie = req.cookies.get("token") || undefined;
  // if (!cookie) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }

  // const response = await fetch(
  //   "http://localhost:4000/api/auth/auth-cookies?cookieName=token",
  //   config
  // );
  // const cookies = await response.json();

  const session = await validateSession(cookie);

  if (!session.success) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/profile", "/profile/reviews", "/profile/shops"],
};
