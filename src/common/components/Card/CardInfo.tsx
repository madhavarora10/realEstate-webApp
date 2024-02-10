/* eslint-disable react/require-default-props */
import React from 'react';
import Image from 'next/image';
import { SubHeading } from '../Headings/SubHeading';

type CardsProps = {
  heading?:string,
  img?:any,
  descp?:string,
  button?:{ [key:string]:string },
};

export const CardInfo:React.FC<CardsProps> = (props:CardsProps) => {
  const {
    img,
    heading,
    descp,
    button,

  } = props;
  return (
    <div className=" bg-transparent flex flex-col  max-w-xs">
      <div>
        <Image alt={img.alt} src={img.url} height={img.height} width={img.width} />
      </div>
      <SubHeading textContent={heading} className=" text-fs-1.5" />
      <p className=" text-card-descp text-fs-0.7 font-wt-500 leading-7 pr-16">{descp}</p>

    </div>
  );
};
