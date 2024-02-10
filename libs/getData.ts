/* eslint-disable object-shorthand */

import { fieldType } from '../src/common/types';

export const getAllProperties = async (arg:fieldType) => {
  const {
    location,
    priceLte,
    propertyType,
  } = arg;

  // const searchParams = new URLSearchParams({
  //   location: location, priceGte: priceGte, priceLte: priceLte, propertyType: propertyType,
  // });
  // const url = new URL('http://localhost:3000/api/properties?location?');
  // Object.keys(searchParams).forEach((key) => url.searchParams.append(key, searchParams[key]));
  const res = await fetch(`http://localhost:3000/api/properties?location=${location}&priceLte=${priceLte}&propertyType=${propertyType}`, { next: { revalidate: 3600 }});
  if (!res.ok) { console.log(`${res}error`); }
  return res.json();
};

export const getProperty = async (id:string) => {
  const res = await fetch(`http://localhost:3000/api/properties/${id}`, { next: { revalidate: 3600 } });
  if (!res.ok) { console.log(`${res}error`); }
  return res.json();
};
