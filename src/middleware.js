import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';

export function middleware(request) {
  const userEmail = getCookie('userEmail', { req: request });

  if (userEmail === undefined) {
    const url = request.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home'],
  // matcher: ['/home', '/chapter/:path*'],
};
