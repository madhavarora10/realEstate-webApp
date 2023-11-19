/* eslint-disable @typescript-eslint/quotes */

import { MyObject, imgObj, buttonObj } from "../hero";

export type topPageType = {
  showMobile: number,
  status: number,
  heading: string;
  subHeading:string;
  buttons: [Object];
  searchBar:[
    {
      label:string,
      options:[{
        label:string,
        value:string
      }]
    },
  ] ;
  searchButton: MyObject,
};
export type middlePageType = {
  showMobile: number,
  status: number,
  learnButton: MyObject,
  heading: string,
  subHeading:string,
  descp: string,
  cards: [
    {
      popular: boolean,
      img: imgObj,
      heading: string,
      location: string,
      price: string,
      area: {
        text: string,
        areaSpace: string,
      },
      button: buttonObj,
    },
  ],
};

export type middlePage2Type = {
  showMobile: number,
  status: number,
  heading: string,
  subHeading: string,
  cards: [
    {
      icon: imgObj,
      heading: string,
      descp: string,
    },
  ]
};

export type aboutUsType = {
  showMobile: number,
  status: number,
  heading: string,
  subHeading: string,
  descp: string,
  button: buttonObj,
  ratingsBg: imgObj,
  cards: [
    {
      number: number,
      descp: string,
    },
  ],
};

export type reviewsType = {
  showMobile: number,
  status: number,
  button: buttonObj,
  heading: string,
  subHeading: string,
  cards: [
    {
      commasImage: imgObj,
      heading: string,
      descp: string,
      pfp: imgObj,
      name: string,
      profile: string,
    },

  ],
};
export type options = {
  label:string,
  value:string
};
export type fieldType = {
  location:string,
  priceGte:string,
  priceLte:string,
  propertyType:string,
};
export type fieldTypeParams = {
  params:{
    location:string,
    priceGte:number,
    priceLte:number,
    propertyType:string,
  }
};
