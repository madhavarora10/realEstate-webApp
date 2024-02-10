/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */

import { ObjectId } from 'mongoose';
import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../../libs/mongodb';
import { Property } from '../../../../../models/property';
import { PropertyType } from '../../../../common/types/property-type';

type Params = {
  params:{
    id:ObjectId
  }
};
export async function GET(request:Request, { params: { id } }:Params) {
//   console.log(params);
  const pipeline = [
    {
      $match: { $expr: { $eq: ['$_id', { $toObjectId: id }] } },

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
    const doc = await Property.aggregate(pipeline);
    doc[0].coordinates = doc[0].coordinates.map(parseFloat);
    if (!doc) {
      return NextResponse.json({ message: 'Invalid id' }, { status: 401 });
    }

    return NextResponse.json({ doc }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  // const doc:any = await Property.create(request.json);
}

export async function DELETE(request:Request, { params: { id } }:Params) {
//   console.log(params);
  try {
    await connectMongoDB();
    const doc = await Property.findById({ _id: id });
    if (!doc) {
      return NextResponse.json({ message: 'Invalid id' }, { status: 401 });
    }
    await Property.findByIdAndDelete({ _id: id });
    return NextResponse.json({ message: 'Delete completed' }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  // const doc:any = await Property.create(request.json);
}
export async function PUT(request:Request, { params: { id } }:Params) {
//   console.log(params);
  const reqBody = await request.json();
  if (!reqBody) {
    return NextResponse.json({ message: 'No body provided' }, { status: 401 });
  }
  try {
    await connectMongoDB();
    const doc = await Property.findById({ _id: id });
    if (!doc) {
      return NextResponse.json({ message: 'Invalid id' }, { status: 401 });
    }
    await Property.findByIdAndUpdate({ _id: id }, reqBody);
    return NextResponse.json({ message: 'Update completed' }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  // const doc:any = await Property.create(request.json);
}
