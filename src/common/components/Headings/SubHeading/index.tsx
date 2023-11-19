/* eslint-disable react/require-default-props */

import React, { useState } from 'react';

type SubHeadingProps = {
  textContent?:string,
  className?:string,
};
export const SubHeading = (props:SubHeadingProps) => {
  const {
    textContent,
    className,
  } = props;
  return (
    <h1 className={`font-secondaryRegular text-secondary font-wt-700 leading-lh-3 ${className || ' text-fs-3 leading-lh-3.5'}`}>
      {textContent}
    </h1>
  );
};
