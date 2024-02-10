/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/require-default-props */
import React from 'react';
import Image from 'next/image';
import ButtonBasic from '../Button/ButtonBasic';
import { CardsProps } from '../../types/hero';
import { PropertyType } from '../../types/property-type';

export const CardBasic = async (props?:any) => {
  const {
    _id,
    name,
    address,
    price,
    size,
    imageCover,
  } = await props;
  return (
    <div className="p-3 border-2 w-80 border-card-border flex flex-col gap-3">
      <div className=" h-56 relative object-contain w-full">
        <Image alt="property image" src={`/properties-images/image-covers/${imageCover}`} fill />
      </div>
      <h1 className=" text-secondary font-primaryRegular text-fs-1.5 font-wt-600 leading-8">{name}</h1>
      <p className=" text-card-descp text-fs-0.7 font-wt-500 leading-7">{address}</p>
      <div className="flex justify-between">
        <h1 className=" text-primary font-primaryRegular text-fs-1 font-wt-600 leading-8">
          $
          {' '}
          {price}
        </h1>
        <span className=" px-1 bg-e3e3e3 py-0.5 flex gap-1 text-secondary font-primaryRegular text-fs-0.7 font-wt-500 leading-6 ">
          <p>{size}</p>
          <span className="text-card-descp">Living Area</span>
        </span>
      </div>
      <ButtonBasic
        className=" mt-6 border-2 border-primary text-center w-full py-2 text-primary hover:text-white hover:bg-primary flex"
        textContent="View More"
        href={`/properties/${_id}`}
      />
    </div>
  );
};
