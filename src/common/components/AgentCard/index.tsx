/* eslint-disable react/no-array-index-key */

import React from 'react';
import Image from 'next/image';
import { AgentCardProps } from '../../types/property-page';

const AgentCard = (props:AgentCardProps) => {
  const {
    placeholder,
    heading,
    data,

  } = props;
  console.log(placeholder);

  return (
    <div className=" font-primaryRegular bg-primaryDark text-white p-4 mt-12 border-card-border border-2 rounded-lg">
      <div className=" border-b border-card-border flex flex-col items-center pb-4">
        <h1 className=" text-white text-fs-1.5">{heading}</h1>
        <div className=" h-24 w-24 mt-8 object-contain relative"><Image src={placeholder} alt="pfp Image" fill /></div>
        <p className=" font-primaryRegular mt-6">{data.name}</p>
        <p className=" font-primaryRegular mt-2">{data.email}</p>
      </div>

    </div>
  );
};
export default AgentCard;
