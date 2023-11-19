/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
// import Link from 'next/link';
import _ from 'lodash';
import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { CardBasic } from '../../../../common/components/Card/CardBasic';
import { Heading } from '../../../../common/components/Headings/Heading';
import { SubHeading } from '../../../../common/components/Headings/SubHeading';
import { Description } from '../../../../common/components/Description';
import ButtonBasic from '../../../../common/components/Button/ButtonBasic';
import { middlePageType } from '../../../../common/types/home';

type MiddlePageProps = {
  heros: middlePageType
};

const MiddlePage = (props:MiddlePageProps) => {
  const {
    heros,
  } = props;
  // console.log(heros.button.text);
  if (_.isEmpty(heros) === true) {
    return null;
  }
  if (heros.status === 0) {
    return null;
  }

  return (
    <div className="element__container w-full">
      <Heading textContent={heros.heading} />
      <SubHeading textContent={heros.subHeading} className=" text-fs-3" />
      <div className="flex justify-between text-primary font-primaryRegular text-fs-1.15">
        <Description textContent={heros.descp} />
        <ButtonBasic textContent={heros.learnButton?.label} href={heros.learnButton?.href} className="p-4 gap-2 font-wt-500 leading-lh-1.5" addOnAfter={<IoIosArrowDroprightCircle />} />
      </div>
      <div className="flex py-4 justify-between mt-8">
        {heros.cards?.map((e:any, index:number) => (
          <CardBasic key={index} heading={e.heading} price={e.price} area={e.area} location={e.location} img={e.img} button={e.button} />
        ))}
      </div>
    </div>
  );
};

export default MiddlePage;
