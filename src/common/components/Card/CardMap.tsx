import React from 'react';
import Image from 'next/image';
import { MdOutlineBedroomParent, MdOutlineBathroom } from 'react-icons/md';
import { BsHouseDoor } from 'react-icons/bs';
import { PropertyType } from '../../types/property-type';

export const CardMap = (props:PropertyType) => {
  const {
    price,
    name,
    address,
    bedrooms,
    bathrooms,
    squareArea,
  } = props;
  return (
    <div className="flex border-card-border relative rounded-md border-2">
      <div className=" w-1/2 relative">
        <Image src="/properties/temp.png" style={{ borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px' }} fill className="  object-center object-cover  " alt="" />
      </div>
      <div className=" p-5 font-primaryRegular w-full">
        <div className=" border-b border-card-descp">
          <p className=" text-primary text-fs-0.875 font-wt-600  ">
            $
            {' '}
            {price}
          </p>
          <h1 className=" text-fs-1.15 font-wt-600 leading-6 text-secondary">{name}</h1>
          <p className=" text-card-descp text-fs-0.7 font-wt-400 leading-6">{address}</p>
        </div>
        <div className=" pt-2 flex gap-4">
          <div className=" flex text-secondary font-primaryRegular text-fs-0.875 gap-1 justify-center items-center">
            <span className=" text-primary text-fs-1.25"><MdOutlineBedroomParent /></span>
            {bedrooms}
          </div>
          <div className=" flex font-primaryRegular text-fs-0.875 gap-2 justify-center text-secondary items-center">
            <span className=" text-primary text-fs-1.25"><MdOutlineBathroom /></span>
            {bathrooms}
          </div>
          <div className=" flex font-primaryRegular text-fs-0.875 gap-2 justify-center items-center text-secondary">
            <span className=" text-primary  text-fs-1.25"><BsHouseDoor /></span>
            {squareArea}
            {' '}
            Sqm
          </div>
        </div>

      </div>

    </div>
  );
};
