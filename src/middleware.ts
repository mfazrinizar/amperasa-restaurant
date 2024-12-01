// middleware.ts

"use server";

import { type NextRequest, NextResponse } from "next/server";
import { unsignCookie } from "@/lib/utils/crypto";

const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  // "/admin-login",
  "/__/auth",
  "/about",
  "/book",
  "/menu",
  "/contact",
  "/error"
];
const allowedRedirectionPaths = ["/", "/login", "/dashboard", "/error"];

const USER_SESSION_NAME = process.env.USER_SESSION_NAME!;
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME!;
const AUTH_COOKIE_SIGNATURE_KEY_CURRENT = process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!;
const AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!;

// const ADMIN_SESSION_NAME = process.env.ADMIN_SESSION_NAME!;
// const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME!;
// const ADMIN_COOKIE_SIGNATURE_KEY_CURRENT = process.env.ADMIN_COOKIE_SIGNATURE_KEY_CURRENT!;
// const ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS!;

async function verifyCookie(
  value: string | undefined,
  currentKey: string,
  previousKey: string,
) {
  if (!value) return "";
  const unsignedValue =
    (await unsignCookie(value, currentKey)) ||
    (await unsignCookie(value, previousKey));
  return unsignedValue || "";
}

function isValidRedirectionPath(path: string): boolean {
  return allowedRedirectionPaths.includes(path);
}

export default async function middleware(request: NextRequest) {
  console.log("Request URL:", request.nextUrl.toString());
  console.log("Request Pathname:", request.nextUrl.pathname);

  const userSession = await verifyCookie(
    request.cookies.get(USER_SESSION_NAME)?.value,
    AUTH_COOKIE_SIGNATURE_KEY_CURRENT,
    AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  // const adminSession = await verifyCookie(
  //   request.cookies.get(ADMIN_SESSION_NAME)?.value,
  //   ADMIN_COOKIE_SIGNATURE_KEY_CURRENT,
  //   ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS,
  // );
  const userToken = await verifyCookie(
    request.cookies.get(AUTH_COOKIE_NAME)?.value,
    AUTH_COOKIE_SIGNATURE_KEY_CURRENT,
    AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  // const adminToken = await verifyCookie(
  //   request.cookies.get(ADMIN_COOKIE_NAME)?.value,
  //   ADMIN_COOKIE_SIGNATURE_KEY_CURRENT,
  //   ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS,
  // );

  // console.log("User session:", userSession);
  // console.log("User token:", userToken);
  // console.log("Admin session:", adminSession);
  // console.log("Admin token:", adminToken);

  // if (request.nextUrl.pathname.startsWith("/menu") && (!userSession || !userToken)) {
  //   // if (request.cookies.get(USER_SESSION_NAME)?.value || request.cookies.get(AUTH_COOKIE_NAME)?.value) {
  //   //   deleteCookie(NextResponse.next(), USER_SESSION_NAME);
  //   //   deleteCookie(NextResponse.next(), AUTH_COOKIE_NAME);
  //   // }

  //   const absoluteURL = new URL("/login", request.nextUrl.origin);
  //   if (isValidRedirectionPath(absoluteURL.pathname)) {
  //     return NextResponse.redirect(absoluteURL.toString());
  //   }
  // }

  // if (request.nextUrl.pathname.startsWith("/admin-dashboard") 
  //   // && (!adminSession || !adminToken)
  // ) {
  //   // if (request.cookies.get(ADMIN_SESSION_NAME)?.value || request.cookies.get(ADMIN_COOKIE_NAME)?.value) {
  //   //   deleteCookie(NextResponse.next(), ADMIN_SESSION_NAME);
  //   //   deleteCookie(NextResponse.next(), ADMIN_COOKIE_NAME);
  //   // }

  //   const absoluteURL = new URL("/admin-login", request.nextUrl.origin);
  //   if (isValidRedirectionPath(absoluteURL.pathname)) {
  //     return NextResponse.redirect(absoluteURL.toString());
  //   }
  // }

  if (request.nextUrl.pathname.startsWith("/dashboard") && (!userSession || !userToken)) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  if (
    !userSession &&
    // !adminSession &&
    !publicRoutes.includes(request.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/error", request.nextUrl.origin);
    // console.log("Redirecting to:", absoluteURL.toString());
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  if (!(userSession && userToken) 
    // && !(adminSession && adminToken) 
  && !publicRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    // console.log("Redirecting to:", absoluteURL.toString());
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  // console.log(userSession && userToken && request.nextUrl.pathname === "/login");

  if (userSession && userToken && request.nextUrl.pathname === "/login") {
    const absoluteURL = new URL("/dashboard", request.nextUrl.origin);
    // console.log("Redirecting to /dashboard/account-data:", absoluteURL.toString());
    if (isValidRedirectionPath(absoluteURL.pathname)) {
      return NextResponse.redirect(absoluteURL.toString());
    }
  }

  // if (
  //   // adminSession && adminToken && 
  //   request.nextUrl.pathname === "/admin-login") {
  //   const absoluteURL = new URL("/admin-dashboard", request.nextUrl.origin);
  //   // console.log("Redirecting to /admin-dashboard:", absoluteURL.toString());
  //   if (isValidRedirectionPath(absoluteURL.pathname)) {
  //     return NextResponse.redirect(absoluteURL.toString());
  //   }
  // }

  // if (
  //   request.nextUrl.pathname.startsWith("/admin-dashboard") &&
  //   request.nextUrl.pathname !== "/admin-login" 
  //   // && !adminToken && !adminSession
  // ) {
  //   const absoluteURL = new URL("/admin-login", request.nextUrl.origin);
  //   // console.log("Redirecting to /admin-login:", absoluteURL.toString());
  //   if (isValidRedirectionPath(absoluteURL.pathname)) {
  //     return NextResponse.redirect(absoluteURL.toString());
  //   }
  // }
}

// const deleteCookie = (response: NextResponse, key: string) => {
//   response.cookies.set(key, "", { expires: new Date(Date.now()) });
// };

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",  
    "/api/(.*)",
    "/trpc/(.*)",
    "/dashboard",
    "/dashboard/(.*)",
    "/login",
  ],
};

