/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import _ from 'lodash';
import React from 'react';
import { BsGithub, BsFacebook, BsYoutube } from 'react-icons/bs';
import ButtonBasic from '../Button/ButtonBasic';
import { Description } from '../Description';
import { SubHeading } from '../Headings/SubHeading';

type FooterProps = {
  heros: any
};

const Footer = (props: FooterProps) => {
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
  const iconFunc = (icons:string) => {
    switch (icons) {
      case 'youtube': {
        return (<BsYoutube />);
      }
      case 'facebook': {
        return (<BsFacebook />);
      }
      case 'github': {
        return (<BsGithub />);
      }
      default: {
        return 0;
      }
    }
  };

  return (
    <div className="w-full element__container bg-primary-bg">
      <div className="flex gap-x-40 gap-y-20 flex-wrap">
        <div>
          <span className="w-12 h-12 rounded-full bg-primary text-center flex items-center justify-center text-white text-fs-1.5 font-wt-800">M</span>
          <Description textContent={heros.descp} className=" text-fs-1 font-wt-400 leading-6 py-4 w-64 " />
          <div>
            <SubHeading textContent={heros.newsletter?.heading} className=" font-wt-500 text-fs-1.25 leading-7 " />
            <div>
              <input className=" text-descp-color bg-secondary-bg outline-none border-none p-2 text-fs-1 font-wt-500" placeholder={heros.newsletter?.placeholder} />
              <ButtonBasic className=" bg-primary drop-shadow-buttonType1 py-2 px-4 border-none text-fs-1 leading-6 font-wt-500 text-white" href={heros.newsletter?.button.link} textContent={heros.newsletter?.button.label} />
            </div>
          </div>
        </div>

        {heros.body?.map((items:any, index:number) => (
          <div key={index}>
            <SubHeading textContent={items.label} className="font-wt-500 leading-7 text-fs-1.25" />
            <div>
              {items.body?.map((item:any, i:number) => (
                <div key={i} className=" cursor-pointer text-575757 font-inter font-wt-400 leading-6 py-2 text-fs-1">
                  <Link href={item.link}>
                    <span>{item.label}</span>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        ))}
        <div>
          <SubHeading className=" text-fs-1.25 font-wt-500 leading-7 pb-2" textContent={heros.socials?.heading} />
          <div className="flex justify-between gap-6 text-fs-1.5 cursor-pointer">
            {
                heros.socials?.socialsLinks?.map((el:any, index:number) => (
                  <div key={index}>
                    <Link href={el.link}>
                      <span className="text-primary">
                        { iconFunc(el.icons)}
                      </span>
                    </Link>
                  </div>
                ))
}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
