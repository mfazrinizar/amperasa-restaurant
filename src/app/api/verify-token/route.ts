// src/app/api/verify-token/route.ts

"use server"

import { unsignCookie } from "@/lib/utils/crypto";
import { NextRequest, NextResponse } from "next/server";

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

export async function GET(request: NextRequest) {
  const USER_SESSION_NAME = process.env.USER_SESSION_NAME!;
  const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME!;
  const AUTH_COOKIE_SIGNATURE_KEY_CURRENT = process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!;
  const AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!;

  const ADMIN_SESSION_NAME = process.env.ADMIN_SESSION_NAME!;
  const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME!;
  const ADMIN_COOKIE_SIGNATURE_KEY_CURRENT = process.env.ADMIN_COOKIE_SIGNATURE_KEY_CURRENT!;
  const ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS!;

  const userSession = await verifyCookie(
    request.cookies.get(USER_SESSION_NAME)?.value,
    AUTH_COOKIE_SIGNATURE_KEY_CURRENT,
    AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  const userToken = await verifyCookie(
    request.cookies.get(AUTH_COOKIE_NAME)?.value,
    AUTH_COOKIE_SIGNATURE_KEY_CURRENT,
    AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  const adminSession = await verifyCookie(
    request.cookies.get(ADMIN_SESSION_NAME)?.value,
    ADMIN_COOKIE_SIGNATURE_KEY_CURRENT,
    ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  const adminToken = await verifyCookie(
    request.cookies.get(ADMIN_COOKIE_NAME)?.value,
    ADMIN_COOKIE_SIGNATURE_KEY_CURRENT,
    ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS,
  );
  
  if ((!userSession || !userToken) && (!adminSession || !adminToken)) {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }

  return NextResponse.json({ message: "OK" }, { status: 200 });
}

