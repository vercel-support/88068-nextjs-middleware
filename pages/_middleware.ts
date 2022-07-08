import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const newURL = new URL('/', request.url);
  console.log('redirecting to', { newURL });
  return NextResponse.redirect(newURL);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/(.*)', // we also tried some other matcher patterns, none of which worked
};
