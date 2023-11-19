export type PropertyType = {
  _id:number | undefined,
  name: string,
  description:string,
  city:string,
  yearBuilt:string | undefined,
  size:string | undefined,
  lotSize:string | undefined,
  parkingArea: string | undefined,
  deposit: string,
  address: string,
  pincode:number,
  status:string,
  bedrooms: number | undefined,
  bathrooms:number | undefined,
  price:number,
  squareArea:number | undefined,
  repairQuality:string | undefined,
  priceDiscount:number | undefined,
  imageCover:string,
  images: [string],
  createdAt: Date,
  location: string,
  coordinates: [lat:number, lng:number],
  dateAvailable: Date,
  type:string | undefined,
  date: Date,
  laundry: string | undefined,
  cooling: string | undefined,
  heating: string | undefined,

};
