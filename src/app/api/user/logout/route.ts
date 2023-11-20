/* eslint-disable @next/next/no-server-import-in-page */
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { logoutCookie } from '../../../../common/utils/jwt-utils';

export async function GET() {
  try {
    // logoutCookie();
    const response = NextResponse.json({ message: 'Log out ' }, { status: 200 });
    response.cookies.delete('jwt');
    return response;
  } catch (err) {
    console.log(err);
  }
}
