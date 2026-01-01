import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/create", "/notifications", "/chats", "/settings"];
const publicOnlyRoutes = ["/auth/login", "/auth/register"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("refresh")?.value; 
  const { pathname } = request.nextUrl;

  if (publicOnlyRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/settings/:path*",
    "/create/:path*",
    "/notifications/:path*", 
    "/chats/:path*", 
    "/auth/login", 
    "/auth/register",
  ],
};

