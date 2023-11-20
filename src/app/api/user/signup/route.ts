/* eslint-disable radix */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';
import connectMongoDB from '../../../../../libs/mongodb';
import { UserType } from '../../../../common/types';
import { User } from '../../../../../models/user';
import { createSendToken } from '../../../../common/utils/jwt-utils';

const Cookies = require('cookies');

export async function POST(request:Request, res:NextApiResponse) {
  try {
    const body:UserType = await request.json();
    // console.log(body);
    await connectMongoDB();
    const newUser = await User.create({
      name: body.name,
      email: body.email,
      password: body.password,
      passwordConfirm: body.passwordConfirm,
    });
    const { token, user, cookieOptions } = createSendToken(newUser);
    if (!token || !user) { return NextResponse.json({ message: 'error in token or user' }, { status: 400 }); }

    const response = NextResponse.json({ message: 'created ', user, token }, { status: 200 });
    response.cookies.set('jwt', token, cookieOptions);
    return response;
  } catch (error) {
    console.log(error);
  }
}
