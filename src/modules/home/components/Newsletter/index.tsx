/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
// import Link from 'next/link';
import _ from 'lodash';
import React from 'react';
import Image from 'next/image';
import { SubHeading } from '../../../../common/components/Headings/SubHeading';
import { Description } from '../../../../common/components/Description';
import { NewsletterType } from '../../../../common/types/home';

type NewsletterProps = {
  heros: NewsletterType
};

const Newsletter = (props:NewsletterProps) => {
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
    <div className="element__container  bg-gradient-to-r from-C1DEE8 from-40% via-DDDCD1 from-20% to-FBD9B9 from-90%  w-full ">
      <div className="flex flex-col-reverse lg:flex-row  ">
        <div className="text-primary pt-14 lg:pt-6 font-primaryRegular w-full lg:w-1/2 text-fs-1.15">
          <SubHeading textContent={heros.heading} />
          <Description textContent={heros.descp} />
          <div className=" mt-12 flex justify-between w-full lg:w-max rounded-3xl bg-white">
            <input className=" border-none outline-none rounded-3xl px-4 lg:px-12 py-4 text-fs-0.875   lg:w-2/3" placeholder={heros.emailInput.placeholder} />
            <button style={{ backgroundColor: 'black' }} className=" p-4 mr-0 text-fs-0.875 rounded-3xl text-white" type="button">{heros.emailInput.buttonText}</button>
          </div>
        </div>
        <div className=" mt-1 lg:mt-8 hidden lg:block lg:h-104 w-full lg:w-1/2 relative">
          <Image alt="houseImage" className="  object-contain object-center" src={heros.houseImage} fill />
        </div>
      </div>

    </div>
  );
};

export default Newsletter;
