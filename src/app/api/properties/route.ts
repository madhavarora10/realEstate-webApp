/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */

import { typeOf } from '@maptiler/sdk';
import { writeFile } from 'fs/promises';
import { ObjectId } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import { Property } from '../../../../models/property';
import { User } from '../../../../models/user';
import { imageUpload } from '../../../common/helpers/imagesUpload';
import { fieldType, fieldTypeParams } from '../../../common/types';
import { PropertyType } from '../../../common/types/property-type';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(request) {
  try {
    const formData:FormData = await request.formData();

    const agentEmail = formData.get('agent') as string;
    if (!agentEmail) {
      return NextResponse.json({ message: 'Email is not provided' }, { status: 401 });
    }
    const user = await User.findOne({ email: agentEmail });
    if (!user) {
      return NextResponse.json({ message: 'Email is not provided' }, { status: 401 });
    }
    const imageCoverFile = formData.get('imageCover') as File | null;
    const image1 = formData.get('image1') as File | null;
    const image2 = formData.get('image2') as File | null;
    const image3 = formData.get('image3') as File | null;
    const image4 = formData.get('image4') as File | null;
    const image5 = formData.get('image5') as File | null;
    const coordinate1 = formData.get('coordinate1') as unknown as number | undefined;
    const coordinate2 = formData.get('coordinate2') as unknown as number | undefined;

    // console.log(imagesArray);

    const body:Record<string, string | File | Array<string | number> | number | ObjectId> = Object.fromEntries(formData.entries());
    body.agent = user._id as ObjectId;
    body.imageCover = undefined;
    delete body.image1;
    delete body.image2;
    delete body.image3;
    delete body.image4;
    delete body.image5;
    body.images = undefined;
    // console.log( ' from res',body);
    if (!body) { return NextResponse.json({ message: 'body is empty or there is some error' }, { status: 404 }); }

    if (imageCoverFile) {
      const filename:string = Date.now() + imageCoverFile.name.replaceAll(' ', '_');
      body.imageCover = filename;
      await imageUpload(imageCoverFile, 'public/properties-images/image-covers/', filename);
    }
    if (image1 && image2 && image3 && image4 && image5) {
      const imagesArray:Array<File> | null = [image1, image2, image3, image4, image5];
      // console.log(imagesArray);
      // console.log('from imagesArray');
      const images:Array<string> = [];
      imagesArray?.map(async (item) => {
        const filename:string = Date.now() + item?.name.replaceAll(' ', '_');
        images.push(filename);
        await imageUpload(item, 'public/properties-images/images/', filename);
      });

      body.images = images;
    }
    body.coordinates = [coordinate1, coordinate2];

    delete body.coordinates1;
    delete body.coordinates2;

    // console.log(body);

    await connectMongoDB();

    const res = await Property.insertMany([body]);

    if (!res) {
      return NextResponse.json({ message: 'Something went wrong' }, { status: 404 });
    }
    // console.log(res);
    return NextResponse.json({ message: 'created' }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  // const doc:any = await Property.create(request.json);
}
export async function GET(request:Response) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');
  // const priceGte = Number(searchParams.get('priceGte'));
  const priceLte = Number(searchParams.get('priceLte'));
  const pipeline = [
    {
      $match: { city: location, type: propertyType, price: { $lte: priceLte } },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'agent',
        foreignField: '_id',
        as: 'agent_details',
      },
    },
    {
      $addFields: {
        // coordinates: { $toString: '$coordinates' },
        agent_details: {
          $first: '$agent_details',
        },

      },
    },
    {
      $project: {
        'agent_details.password': 0,
      },
    },

  ];

  try {
    await connectMongoDB();
    const docsAll = await Property.aggregate(pipeline);
    const docs = docsAll.map((item) => ({
      ...item,
      coordinates: item.coordinates.map(parseFloat),
    }));
    return NextResponse.json({ docs }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  // const doc:any = await Property.create(request.json);
}
