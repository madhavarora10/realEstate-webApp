/* eslint-disable radix */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';
import connectMongoDB from '../../../../../libs/mongodb';
import { UpdatePasswordBody, UserType } from '../../../../common/types';
import { User } from '../../../../../models/user';

export async function PUT(request:Request, res:NextApiResponse) {
  try {
    const body:UpdatePasswordBody = await request.json();
    const { email, password, passwordConfirm } = body;
    console.log(body);
    if (!email || !password || !passwordConfirm) {
      return NextResponse.json({ message: 'provide email and password' }, { status: 404 });
    }
    if (password !== passwordConfirm) {
      return NextResponse.json({ message: "password and confirm password doesn't match" }, { status: 404 });
    }
    await connectMongoDB();
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return NextResponse.json({ message: 'Incorrect email or password' }, { status: 404 });
    }
    user.password = password;
    user.passwordConfirm = passwordConfirm;
    await user.save();

    user.password = undefined;

    const response = NextResponse.json({ message: '  password changed' }, { status: 201 });
    return response;
  } catch (error) {
    console.log(error);
  }
}
