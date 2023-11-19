/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Link from 'next/link';
import {
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
} from 'react-icons/ri';
import { RxHamburgerMenu, RxCross1, RxHome } from 'react-icons/rx';
import {
  Sidebar,
  Menu,
  MenuItem,
  // useProSidebar
} from 'react-pro-sidebar';
import classes from './navbar.module.scss';

const Sidebars = (heros:any) => {
  const {
    body,
  } = heros;

  const iconFunc = (icons:any) => {
    switch (icons) {
      case 'home': {
        return (<RxHome />);
      }
      case 'pricing': {
        return (<RiTeamLine />);
      }
      case 'faqs': {
        return (<RiCalendar2Line />);
      }
      case 'aboutus': {
        return (<RiUserFollowLine />);
      }
      case 'contactus': {
        return (<RiFolder2Line />);
      }
      default: {
        return 0;
      }
    }
  };
  // const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(true);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const collapsedChange = () => {
    setCollapsed(true);
  };
  return (
    <>
      <div className="p-4 fixed w-full z-50  bg-white">
        {collapsed
          ? (
            <div onClick={handleCollapsedChange}><RxHamburgerMenu /></div>
          ) : (
            <div className=" pl-52 animate-slide-in-from-left" onClick={handleCollapsedChange}>
              <RxCross1 />
            </div>
          )}
      </div>
      <div className={`${collapsed ? 'h-12' : 'h-full'} z-50 bg-white mt-12  fixed `}>

        <div>
          {!collapsed && <div onClick={() => { collapsedChange(); }} className={classes.modalBackdrop} />}
          <Sidebar
            rootStyles={{
              height: '100vh',
              zIndex: '10000',
              position: 'fixed',
              marginLeft: '-1px',
            }}
            collapsed={collapsed}
            collapsedWidth="0"
            toggled={toggled}
          >
            <Menu className=" p-2 font-wt-500  text-fs-1"> LOGO </Menu>
            <Menu
              rootStyles={{
                backgroundColor: 'white',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                 boxShadow: 'rgba(148, 150, 175, 0.14) 0px 10px 55px',

              }}
            >

              <div className="">
                {body?.map((el: any, index: any) => (
                  <div key={index}>
                    <MenuItem>
                      <div className="flex items-center gap-4">
                        <span className="">{iconFunc(el.icon)}</span>
                        <Link href={el.link}><span className=" font-inter font-wt-500 text-fs-1">{el.label}</span></Link>
                      </div>
                    </MenuItem>
                  </div>
                ))}
              </div>

            </Menu>

          </Sidebar>
        </div>
      </div>

    </>
  );
};
export default Sidebars;
