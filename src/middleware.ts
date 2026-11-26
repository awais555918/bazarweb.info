import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.redirect("https://it.esimo.io/", 301);
}

// Every path, including ones that would otherwise 404.
export const config = {
  matcher: "/((?!_next/).*)",
};
