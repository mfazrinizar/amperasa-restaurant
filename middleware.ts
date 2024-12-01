import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const statusCode = req.nextUrl.searchParams.get("statusCode");

    if (statusCode) {
      const errorUrl = new URL("/error", req.nextUrl.origin);
      errorUrl.searchParams.set("statusCode", statusCode);
      console.log(`Redirecting to ${errorUrl}`);
      return NextResponse.redirect(errorUrl);
    }
  
    return NextResponse.next();
}
