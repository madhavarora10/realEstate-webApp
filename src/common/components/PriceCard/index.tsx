/* eslint-disable react/no-array-index-key */

'use client';

import Link from 'next/link';
import React from 'react';
import { requestCard } from '../../types/property-page';
import ButtonBasic from '../Button/ButtonBasic';
import CalendarContainer from '../Calendar';

const PriceCard = (props:requestCard) => {
  const {
    buy,
    applyButton,
    sendRequest,
    price,

  } = props;
  //   console.log(buy);

  return (
    <div className=" font-primaryRegular p-4 border-card-border border-2 rounded-lg">
      <div className=" border-b border-card-border pb-4">
        <h1 className=" text-descp-color text-fs-0.7">{buy}</h1>
        <p className=" text-fs-1.25 text-primary font-wt-600 ">
          $
          {' '}
          {price}
        </p>
        <ButtonBasic className="w-full text-center font-primaryRegular text-fs-1 font-wt-600 text-white bg-primary mt-4 p-2 rounded-lg" textContent={applyButton.label} href={applyButton.link} />
      </div>
      <div className=" mt-4">
        <h1 className=" font-primaryRegular font-wt-600 text-fs-0.875">{sendRequest.heading}</h1>
        <div className="flex mt-4 gap-8 justify-between">
          {sendRequest.buttons.map((el, index:number) => (
            <span className=" p-2 rounded-lg cursor-pointer w-1/2 text-center border-card-border border-2 text-fs-0.875 active:bg-primary active:text-white active:border-primary text-descp-color" key={index}>{el.label}</span>
          ))}
        </div>
        <div className=" w-full mt-4">
          <CalendarContainer />
          <ButtonBasic className="w-full text-center font-primaryRegular text-fs-1 font-wt-600 text-white bg-primaryDark mt-4 p-2 rounded-lg" textContent={sendRequest.requestButton.label} href={sendRequest.requestButton.link} />
        </div>
      </div>

    </div>
  );
};
export default PriceCard;
