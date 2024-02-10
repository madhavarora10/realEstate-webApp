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
import { Heading } from '../../../../common/components/Headings/Heading';
import { SubHeading } from '../../../../common/components/Headings/SubHeading';
import { Description } from '../../../../common/components/Description';

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
      <Heading textContent={heros.heading} />
      <SubHeading textContent={heros.subHeading} />
      <Description className=" text-primaryDark" textContent={heros.descp} />

      {/* Search Bar */}
      <div className="mt-8">
        <div className=" flex">
          {heros.buttons?.map((el:ArrayObjectsType, index:number) => (
            <button className={`${el.id === activeClass ? classes.activeButton : ' text-center py-3 px-8 inline-flex justify-center items-center gap-3 font-primaryRegular  text-fs-1.25 font-wt-500 leading-8 text-8E8E8E'}`} onClick={() => { setActiveClass(el.id); }} key={index} id={el.id}>{el.label}</button>
          ))}
        </div>
        <div className=" bg-white w-full  py-4 flex-row inline-flex px-8">
          {heros.searchBar?.map((el:ArrayObjectsType, i:number) => (
            <div className=" w-20 lg:w-40" key={i}>
              <span className=" text-fs-0.7 lg:text-fs-1.25 font-wt-400 leading-3 lg:leading-7 font-primaryRegular text-secondary">
                {el.label}
              </span>
              <div className="">
                <SelectDefault className="w-12 lg:w-24 border-none outline-none" options={el.options} />
              </div>
            </div>
          ))}
          <ButtonBasic textContent={heros.searchButton?.label} href={heros.searchButton?.label} className=" my-4 lg:my-auto text-fs-0.7 lg:text-fs-1.5 text-center py-2 lg:py-5 px-3 lg:px-12 bg-primary ml-4 lg:ml-8 text-white drop-shadow-buttonType1 " />
        </div>
      </div>
    </div>
  );
};

export default TopPage;
