import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/" || pathname === "/projects") {
    const destination = request.nextUrl.clone();
    destination.pathname = `/en${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(destination);
  }

  if (pathname === "/en" || pathname === "/en/projects") {
    const destination = request.nextUrl.clone();
    destination.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(destination, 308);
  }
}

export const config = { matcher: ["/", "/projects", "/en", "/en/projects"] };
