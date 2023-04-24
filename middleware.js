import { NextResponse } from "next/server";
import { validateSession } from "services/auth";

export async function middleware(req) {
  const cookie = req.cookies.get("token");
  // if (!cookie) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }

  const session = await validateSession(cookie);

  console.log(session);

  if (!session.success) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/profile", "/profile/reviews", "/profile/shops"],
};
