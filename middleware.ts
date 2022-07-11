import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname === '/favicon.ico' ||
    request.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  } else {
    const newURL = new URL('/', request.url);

    console.log('redirecting to', { newURL });

    return NextResponse.redirect(newURL);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
