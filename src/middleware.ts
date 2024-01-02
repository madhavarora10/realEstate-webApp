/* eslint-disable consistent-return */
/* eslint-disable @next/next/no-server-import-in-page */
/* eslint-disable prefer-arrow-callback */
// /* eslint-disable prefer-arrow-callback */
// /* eslint-disable no-mixed-operators */
// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable @next/next/no-server-import-in-page */
// /* eslint-disable consistent-return */
import { withAuth } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req, raw: true });
  const isAuthenticated = !!token;
  if ((req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/sign-up')) && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if ((req.nextUrl.pathname.startsWith('/profile')) && !isAuthenticated) { return NextResponse.redirect(new URL('/', req.url)); }
  return NextResponse.next();
}

export default withAuth({
  pages: {
    signIn: '/login',
    error: '/error',
  },
});
export const config = {
  matcher: ['/login', '/sign-up', '/profile'],
};
// // console.log('from middleware');
// export default function middleware(){};
