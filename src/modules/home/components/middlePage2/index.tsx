/* eslint-disable react/no-array-index-key */
/* eslint-disable no-useless-concat */
/* eslint-disable max-len */
// import Link from 'next/link';
import _ from 'lodash';
import React from 'react';
import { Heading } from '../../../../common/components/Headings/Heading';
import { SubHeading } from '../../../../common/components/Headings/SubHeading';
import { CardInfo } from '../../../../common/components/Card/CardInfo';
import { middlePage2Type } from '../../../../common/types/home/index';

type middlePage2Props = {
  heros: middlePage2Type
};
// {props.stauts === STATUS.ACTIVE ? "hidden__mobile" :""}

const MiddlePage2 = (props: middlePage2Props) => {
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
    <div className="element__container bg-primary-bg">
      <Heading textContent={heros.heading} />
      <SubHeading textContent={heros.subHeading} className="text-fs-3" />
      <div className=" mt-8 justify-center flex flex-wrap gap-12 lg:gap-24">
        {heros.cards?.map((el, index:number) => (
          <div key={index}>
            <CardInfo heading={el.heading} img={el.icon} descp={el.descp} />
          </div>
        ))}
      </div>

    </div>

  );
};

export default MiddlePage2;
