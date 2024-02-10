/* eslint-disable react/require-default-props */
import React from 'react';

type DescriptionProps = {
  textContent:string,
  className?:string,
};
export const Description = (props:DescriptionProps) => {
  const {
    textContent,
    className,
  } = props;
  return (
    <h1 className={` mt-4 text-descp-color font-primaryRegular text-fs-1 font-wt-400 leading-6 ${className} `}>
      {textContent}
    </h1>
  );
};
