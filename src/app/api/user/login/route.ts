/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';
import connectMongoDB from '../../../../../libs/mongodb';
import {
  UserLoginBody,
} from '../../../../common/types';
import { User } from '../../../../../models/user';

export async function POST(request:Request, res:NextApiResponse) {
  try {
    const body:UserLoginBody = await request.json();
    const { email, password } = body;
    // console.log(body);
    // check if email and pass exist
    if (!email || !password) {
      return NextResponse.json({ message: 'provide email and password' }, { status: 400 });
    }
    await connectMongoDB();
    // check user exists and pass is correct
    const userLogin = await User.findOne({ email }).select('+password');
    if (!userLogin || !(await userLogin.correctPassword(password, userLogin.password))) {
      return NextResponse.json({ message: 'Incorrect email or password' }, { status: 400 });
    }
    userLogin.password = undefined;
    const response = NextResponse.json({ message: 'Logged In ', userLogin }, { status: 200 });
    return response;
  } catch (error) {
    console.log(error);
  }
}
