/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { User } from '../../../../../models/user';
import connectMongoDB from '../../../../../libs/mongodb';

export async function PUT(req, res) {
  try {
    const formData:FormData = await req.formData();
    // console.log(formData);
    const file = formData.get('image') as File;
    const email = formData.get('email') as string;
    console.log(file);
    if (!file || !email) {
      return NextResponse.json({ message: 'No file received Or User not logged in. ' }, { status: 404 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename:string = Date.now() + file.name.replaceAll(' ', '_');
    console.log(filename);
    writeFile(
      path.join(process.cwd(), `public/profiles/${filename}`),
      buffer,
    );
    await connectMongoDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    const updateUser = await User.findByIdAndUpdate(user._id, { photo: filename }, { new: true });
    console.log(updateUser);

    updateUser.password = undefined;

    return NextResponse.json({ message: 'Image uploaded successfully', updateUser }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
// // Important for NextJS!
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

