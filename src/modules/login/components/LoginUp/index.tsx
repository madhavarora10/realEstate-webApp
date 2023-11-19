import React from 'react';
import Image from 'next/image';
import { Login } from '../../../../common/types/login';
import LoginForm from '../form/index';

type Props = {
  heros:Login
};
export const LoginCard = (props) => {
  const { heros }:Props = props;
  console.log(heros);

  return (
    <div className="flex gap-52 relative ">
      <div className=" rounded-lg bg-white px-8 py-12 font-primaryRegular flex flex-col items-center ">
        <h1 className=" text-fs-1.5 font-wt-700 leading-9 text-primaryDark ">{heros.body.heading}</h1>
        <p className=" text-center px-10 py-3 font-wt-100 text-fs-0.875">{heros.body.descp}</p>
        <LoginForm form={heros.body.form} />
      </div>
      <div className="  w-1/2 h-96 relative">
        <Image src="/sign-up/personPng.png" fill alt=" " />
      </div>
    </div>
  );
};
