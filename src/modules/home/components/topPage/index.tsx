'use client';

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
// import Link from 'next/link';
import _ from 'lodash';
import React, { useState } from 'react';
import classes from './topPage.module.scss';
import { SelectDefault } from '../../../../common/components/Select';
import ButtonBasic from '../../../../common/components/Button/ButtonBasic';
import { ArrayObjectsType } from '../../../../common/types/hero';

type topPageProps = {
  heros: any
};

const TopPage = (props: topPageProps) => {
  const [activeClass, setActiveClass] = useState('buy');
  const {
    heros,
  } = props;
  // console.log(heros);
  if (_.isEmpty(heros) === true) {
    return null;
  }
  if (heros.status === 0) {
    return null;
  }

  return (
    <div className={` element__container w-full bg-primary-bg overflow-hidden ${classes.bgImage}`}>
      <h1 className=" font-primaryRegular leading-7  text-primary font-wt-500 text-fs-1.25 ">{heros.heading}</h1>
      <h1 className=" py-4 mt-8 w-118 font-secondaryRegular text-secondary font-wt-700 text-fs-4 leading-lh-4">
        {heros.subHeading}
      </h1>
      <p className=" mt-4 text-descp-color font-primaryRegular text-fs-1 font-wt-400 leading-6  w-108">{heros.descp}</p>
      {/* Search Bar */}
      <div className="mt-8">
        <div className=" flex">
          {heros.buttons?.map((el:ArrayObjectsType, index:number) => (
            <button className={`${el.id === activeClass ? classes.activeButton : ' text-center py-3 px-8 inline-flex justify-center items-center gap-3 font-primaryRegular  text-fs-1.25 font-wt-500 leading-8 text-8E8E8E'}`} onClick={() => { setActiveClass(el.id); }} key={index} id={el.id}>{el.label}</button>
          ))}
        </div>
        <div className=" bg-white py-4 inline-flex px-8">
          {heros.searchBar?.map((el:ArrayObjectsType, i:number) => (
            <div className="w-40" key={i}>
              <span className=" text-fs-1.25 font-wt-400 leading-7 font-primaryRegular text-secondary">
                {el.label}
              </span>
              <div className="">
                <SelectDefault className="w-24 border-none outline-none" options={el.options} />
              </div>
            </div>
          ))}
          <ButtonBasic textContent={heros.searchButton?.label} href={heros.searchButton?.label} className=" my-auto text-center py-5 px-12 bg-primary ml-8 text-white drop-shadow-buttonType1 " />
        </div>
      </div>
    </div>
  );
};

export default TopPage;
