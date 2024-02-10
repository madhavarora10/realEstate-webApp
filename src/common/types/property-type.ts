export type PropertyTypeSingle = {
  _id:number | undefined,
  name: string,
  description:string,
  city:string,
  country:string,
  yearBuilt:string | undefined,
  lotSize:string | undefined,
  parkingArea: string | undefined,
  deposit: string,
  address: string,
  pinCode:number,
  status:string,
  bedrooms: number | undefined,
  bathrooms:number | undefined,
  price:number,
  squareArea:number | undefined,
  repairQuality:string | undefined,
  priceDiscount:number | undefined,
  imageCover:string,
  images: [string],
  createdAt: Date
  coordinates: [lat:number, lng:number],
  dateAvailable: string,
  type:string | undefined,
  date: Date | string,
  laundry: string | undefined,
  cooling: string | undefined,
  heating: string | undefined,
  agent_details:{
    id:number,
    name:string,
    email:string,
    active:string
  }
};
export type PropertyType = Array<PropertyTypeSingle>;
