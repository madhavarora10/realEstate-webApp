/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import _ from 'lodash';
import React from 'react';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import classes from './reviewSection.module.scss';
import { CardInfo } from '../../../../common/components/Card/CardInfo';
import { Heading } from '../../../../common/components/Headings/Heading';
import { SubHeading } from '../../../../common/components/Headings/SubHeading';
import { ArrayObjectsType } from '../../../../common/types';
import ButtonBasic from '../../../../common/components/Button/ButtonBasic';
import { Description } from '../../../../common/components/Description';

type ReviewSectionProps = {
  heros: any
};

const ReviewSection = (props: ReviewSectionProps) => {
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
    <div className="element__container ">
      <Heading textContent={heros.heading} />
      <div className="flex justify-between items-center text-primary font-primaryRegular text-fs-1.15">
        <SubHeading textContent={heros.subHeading} className="text-fs-3 pt-8 pb-12" />
        <ButtonBasic textContent={heros.button?.label} href={heros.button?.href} className="p-4 gap-2 font-wt-500 leading-lh-1.5" addOnAfter={<IoIosArrowDroprightCircle />} />
      </div>
      <div className="flex justify-between  gap-4  ">
        {heros.cards.map((el:ArrayObjectsType, index:number) => (
          <div className=" max-w-xs p-4 pb-14 relative border-2 border-card-border " key={index}>
            <Image src={el.commasImage.url} width={el.commasImage.width} height={el.commasImage.height} alt={el.commasImage.alt} />
            <h1 className=" py-4 font-secondaryRegular text-secondary font-wt-600 leading-7 text-fs-1.15">{el.heading}</h1>
            <Description textContent={el.descp} className=" font-wt-400 text-fs-1 leading-6 mt-1 pb-8" />
            <div className="absolute bottom-2  flex">
              <div>
                {' '}
                <Image src={el.pfp.url} width={el.pfp.width} height={el.pfp.height} alt={el.pfp.alt} />
              </div>
              <div className="flex flex-col ml-2">
                <span className=" text-fs-1 font-wt-500 leading-6">{el.name}</span>
                <span className=" text-descp-color text-fs-1 font-wt-400 leading-6 ">{el.profile}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ReviewSection;
