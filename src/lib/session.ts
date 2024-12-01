// lib/session.ts

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signCookie } from "@/lib/utils/crypto";

const USER_SESSION_NAME = process.env.USER_SESSION_NAME!;
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME!;
const AUTH_COOKIE_SIGNATURE_KEY_CURRENT = process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!;
// const AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!;

const ADMIN_SESSION_NAME = process.env.ADMIN_SESSION_NAME!;
const ADMIN_COOKIE_NAME = process.env.ADMIN_COOKIE_NAME!;
const ADMIN_COOKIE_SIGNATURE_KEY_CURRENT = process.env.ADMIN_COOKIE_SIGNATURE_KEY_CURRENT!;
// const ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS = process.env.ADMIN_COOKIE_SIGNATURE_KEY_PREVIOUS!;

export async function createSession(uid: string, token: string, isAdmin: boolean) {
    const signedUid = isAdmin
        ? await signCookie(uid, ADMIN_COOKIE_SIGNATURE_KEY_CURRENT)
        : await signCookie(uid, AUTH_COOKIE_SIGNATURE_KEY_CURRENT);

    const signedToken = isAdmin
        ? await signCookie(token, ADMIN_COOKIE_SIGNATURE_KEY_CURRENT)
        : await signCookie(token, AUTH_COOKIE_SIGNATURE_KEY_CURRENT);

    if (isAdmin) {
        (await cookies()).set(ADMIN_SESSION_NAME, signedUid, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: 60 * 60 * 24, // 1 day
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });

        (await cookies()).set(ADMIN_COOKIE_NAME, signedToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: 60 * 60 * 24, // 1 day
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });
    } else {
        (await cookies()).set(USER_SESSION_NAME, signedUid, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: 60 * 60 * 24, // 1 day
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });

        (await cookies()).set(AUTH_COOKIE_NAME, signedToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: 60 * 60 * 24, // 1 day
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });
    }

    // console.log("Setting USER_SESSION_NAME cookie:", signedUid);
    // console.log("Setting AUTH_COOKIE_NAME cookie:", signedToken);

    redirect("/book");
}

export async function removeSession(isRedirect: boolean) {
    (await cookies()).delete(USER_SESSION_NAME);
    (await cookies()).delete(AUTH_COOKIE_NAME);


    if (isRedirect) {
        redirect("/");
    }
}
