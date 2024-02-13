/* eslint-disable no-constant-condition */

'use client';

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import _ from 'lodash';
import { useSession } from 'next-auth/react';
import classes from './navbar.module.scss';
import Sidebars from './sidebar-sm';
import NavLinks from '../Button/NavLinks';
import { Scroll } from '../Scroll';
import ButtonBasic from '../Button/ButtonBasic';
import { DropdownMenu } from '../Dropdown';

type NavBannerProps = {
  heros: any
};

const NavBanner = (props: NavBannerProps) => {
  const {
    heros,
  } = props;
  const latestScrollValue = Scroll();
  const { data: session, status } = useSession();
  // console.log(status);
  if (_.isEmpty(heros) === true) {
    return null;
  }
  if (heros.status === 0) {
    return null;
  }
  return (
    <>
      <div className=" flex justify-between items-center bg-white  md:hidden w-full  py-3 px-2   ">
        <Sidebars navLinks={heros.navLinks} {...heros} />
        {status === 'authenticated' ? (
          <div>
            <div className=" cursor-pointer">
              <DropdownMenu img={session.user.image ? `/profiles/${session.user.image}` : heros.userImg} itemArray={heros.itemsArray} />
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <ButtonBasic className="flex justify-center items-center   border-none  text-primary text-center  hover:bg-f7f9fc transition-colors  px-5 py-3 rounded-[30px] leading-6 m-0 text-fs-0.875 font-wt-400 font-inter break-normal cursor-pointer" href={heros.loginLinks.link} textContent={heros.loginLinks.label} />
            <ButtonBasic textContent={heros.signupLinks.label} href={heros.signupLinks.link} className="flex drop-shadow-md hover:drop-shadow-none justify-center items-center bg-primary  border-none  font  text-white   transition-colors  px-5 py-3 rounded-2xl leading-6 m-0 text-fs-0.875 font-wt-400 font-inter break-normal cursor-pointer" />

          </div>
        )}

      </div>
      <div
        className={`${latestScrollValue > 3 ? 'bg-white' : 'bg-transparent'} justify-between items-center rounded-2xl text-base md:flex hidden  ${classes.navbar} `}
      >
        <div className=" w-12 h-12 rounded-full bg-primary text-center flex items-center justify-center text-white text-fs-1.5 font-wt-800">M</div>
        <div className="flex gap-3">
          {heros.navLinks?.map((el:any, index:any) => (
            <NavLinks key={index}>
              <Link href={el.link}>{el.label}</Link>
            </NavLinks>
          ))}

        </div>

        {status === 'authenticated' ? (
          <div>
            <div className=" cursor-pointer">
              <DropdownMenu img={session.user.image ? `/profiles/${session.user.image}` : heros.userImg} itemArray={heros.itemsArray} />
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <ButtonBasic className="flex justify-center items-center   border-none  text-primary text-center  hover:bg-f7f9fc transition-colors  px-5 py-3 rounded-[30px] leading-6 m-0 text-fs-0.875 font-wt-400 font-inter break-normal cursor-pointer" href={heros.loginLinks.link} textContent={heros.loginLinks.label} />
            <ButtonBasic textContent={heros.signupLinks.label} href={heros.signupLinks.link} className="flex drop-shadow-md hover:drop-shadow-none justify-center items-center bg-primary  border-none  font  text-white   transition-colors  px-5 py-3 rounded-2xl leading-6 m-0 text-fs-0.875 font-wt-400 font-inter break-normal cursor-pointer" />

          </div>
        )}
      </div>
    </>
  );
};

export default NavBanner;
