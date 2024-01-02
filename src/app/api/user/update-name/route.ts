/* eslint-disable radix */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';
import connectMongoDB from '../../../../../libs/mongodb';
import { UpdateNameBody } from '../../../../common/types';
import { User } from '../../../../../models/user';

export async function PUT(request:Request, res:NextApiResponse) {
  try {
    const body:UpdateNameBody = await request.json();
    const { name, email } = body;
    console.log(body);
    if (!name || !email) {
      return NextResponse.json({ message: 'provide name and email' }, { status: 404 });
    }
    await connectMongoDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Incorrect email' }, { status: 404 });
    }
    const nameChange = await User.findByIdAndUpdate(user._id, { name: name }, { new: true });

    const response = NextResponse.json({ message: 'name changed' }, { status: 201 });
    return response;
  } catch (error) {
    console.log(error);
  }
}
