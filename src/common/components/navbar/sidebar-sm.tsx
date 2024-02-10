/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import {
  Drawer,
} from 'antd';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import NavLinks from '../Button/NavLinks';
import { LinkObj } from '../../types';

type Props = {
  navLinks:LinkObj[]
};
const App: React.FC<Props> = (props) => {
  const { navLinks } = props;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span className=" p-3">
        <GiHamburgerMenu onClick={showDrawer} className=" text-fs-1.5" />
      </span>

      <Drawer
        className=" w-10"
        title={<div className=" absolute right-2 top-2 w-10 h-10 rounded-full bg-primary text-center flex items-center justify-center text-white text-fs-1.25 font-wt-800">M</div>}
        placement="left"
        closable
        onClose={onClose}
        open={open}
        key="left"
      >
        {navLinks?.map((el:any, index:any) => (
          <NavLinks key={index}>
            <Link href={el.link}>{el.label}</Link>
          </NavLinks>
        ))}
      </Drawer>
    </>
  );
};

export default App;
