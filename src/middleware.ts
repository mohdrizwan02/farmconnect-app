import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/login" ||
    path === "/register" ||
    path === "/" ||
    path === "/contact-us" ||
    path === "/about-us";

    // const isFarmerPath =
    // path === "/farmer" ||
    // path === "/farmer/about-us" ||
    // path === "/farmer/contact-us" ||
    // path === "/farmer/dashboard" ||
    // path === "/farmer/marketplace"||
    // path === "farmer/news";

    // const istraderPath =
    // path === "/trader" ||
    // path === "/trader/about-us" ||
    // path === "/trader/contact-us" ||
    // path === "/trader/dashboard" ||
    // path === "/trader/marketplace"||
    // path === "/trader/news";

  const token = request.cookies.get("token")?.value || "";
  
  

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/middleware", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/contact-us",
    "/about-us",
    "/login",
    "/register",
    "/",
    "/farmer",
    "/farmer/news",
    "/farmer/marketplace",
    "/farmer/dashboard",
    "/farmer/about-us",
    "/farmer/contact-us",
    "/farmer/marketplace/selling",
    "/trader",
    "/trader/news",
    "/trader/marketplace",
    "/trader/dashboard",
    "/trader/about-us",
    "/trader/contact-us",
    "/trader/marketplace/buying",
  ],
};
