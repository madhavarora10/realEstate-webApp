/* eslint-disable react/no-array-index-key */

'use client';

import React from 'react';
import { Image } from 'antd';

type Props = {
  width:number,
  height:number,
  imageArray:Array<string>
};
export const ImageCarousel: React.FC<Props> = (props) => {
  const {
    width,
    imageArray,
    height,
  } = props;
  return (
    <Image.PreviewGroup>
      <div className=" flex  gap-4 m-2">
        {imageArray.map((image:string, index:number) => (
          <Image className="border-4 hover:border-primary rounded-lg border-e3e3e3 " height={height} key={index} alt="properties Images" width={width} src={`/properties-images/images/${image}`} />
        ))}
      </div>
    </Image.PreviewGroup>
  );
};
