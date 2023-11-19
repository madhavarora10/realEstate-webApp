/* eslint-disable react/require-default-props */
import React from 'react';

type HeadingProps = {
  textContent?:string,
  className?:string,
};
export const Heading = (props:HeadingProps) => {
  const {
    textContent,
    className,
  } = props;
  return (
    <h1 className={` text-primary font-primaryRegular text-fs-1.25 font-wt-500 leading-7 ${className}`}>
      {textContent}
    </h1>
  );
};
