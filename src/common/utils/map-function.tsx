/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React from 'react';

type MapMethodProps = {
  children?: Array<object>,
  style?: string | ' ',
  onChange?: (prams?:any)=>void,

};
// a child for map method
// style
// on change
export const MapMethod = (props:MapMethodProps) => {
  const {
    children,
    style,
    onChange,

  } = props;

  return (
    <div onChange={onChange} className={style}>
      {children.map((child, index) => (
        <div key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};
