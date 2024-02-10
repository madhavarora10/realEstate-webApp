/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
// import Link from 'next/link';
import Image from 'next/image';
import _ from 'lodash';
import React from 'react';
import classes from './aboutUs.module.scss';
import { Heading } from '../../../../common/components/Headings/Heading';
import { SubHeading } from '../../../../common/components/Headings/SubHeading';
import { Description } from '../../../../common/components/Description';
import ButtonBasic from '../../../../common/components/Button/ButtonBasic';
import { ArrayObjectsType } from '../../../../common/types';

type AboutUsComponentProps = {
  heros: any
};

const AboutUs = (props: AboutUsComponentProps) => {
  const {
    heros,
  } = props;
  // console.log(heros)
  if (_.isEmpty(heros) === true) {
    return null;
  }
  if (heros.status === 0) {
    return null;
  }
  return (
    <div className="w-full element__container ">
      <div className=" flex-col  lg:flex-row flex relative">
        <div className={` w-full  lg:w-1/2 ${classes.bgImage}`}>
          <div className="-mt-20  ml-1 lg:ml-20">
            <Image src={heros.ratingsBg.url} width={heros.ratingsBg.width} height={heros.ratingsBg.height} alt={heros.ratingsBg.alt} />
          </div>
          <div className="  mt-10 relative lg:absolute right-0 bottom-0 bg-white border-none py-5 px-2 inline-flex gap-1">
            {heros.cards.map((el:ArrayObjectsType, index:number) => (
              <div key={index} className=" flex">
                <span className=" text-fs-1.5 lg:text-fs-3 font-secondaryRegular text-secondary font-wt-700 leading-lh-3">{el.number}</span>
                <div className=" text-descp-color font-primaryRegular text-fs-1 font-wt-400 leading-4 lg:leading-6 break-after-all w-full lg:w-32 inline pr-12 pl-4  ">{el.descp}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full lg:w-1/2 px-0  lg:px-12  ">
          <Heading textContent={heros.heading} className="py-12" />
          <SubHeading textContent={heros.subHeading} className="text-fs-3 inline " />
          <Description textContent={heros.descp} className="py-4" />
          <ButtonBasic textContent={heros.button.label} href={heros.button.link} className=" py-4 px-12 text-center bg-primary mt-8 text-white  drop-shadow-buttonType2" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
