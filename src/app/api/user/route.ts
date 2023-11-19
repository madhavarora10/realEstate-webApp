/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-server-import-in-page */

import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import { Property } from '../../../../models/property';
import { fieldType, fieldTypeParams } from '../../../common/types';
import { PropertyType } from '../../../common/types/property-type';

export async function POST(request:Request) {
  try {
    const body:PropertyType = await request.json();
    // console.log(body);
    await connectMongoDB();
    await Property.insertMany([body]);
    return NextResponse.json({ message: 'created' }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
  // const doc:any = await Property.create(request.json);
}
// export async function GET(request:Response) {
//   const url = new URL(request.url);
//   const searchParams = new URLSearchParams(url.search);
//   const location = searchParams.get('location');
//   const propertyType = searchParams.get('propertyType');
//   // const priceGte = Number(searchParams.get('priceGte'));
//   const priceLte = Number(searchParams.get('priceLte'));
//   const pipeline = [
//     { $match: { city: location, type: propertyType, price: { $lte: priceLte } } },
//   ];

//   try {
//     await connectMongoDB();
//     const docs = await Property.aggregate(pipeline);
//     return NextResponse.json({ docs }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//   }
//   // const doc:any = await Property.create(request.json);
// }
