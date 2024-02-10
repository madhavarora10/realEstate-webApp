import React from 'react';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

type DropdownType = {
  link:string,
  label:string,
  key:string,
};
type DropdownProps = {
  img?:string,
  placeHolder?:string,
  itemArray:Array<DropdownType>
};
export const DropdownMenu = (props) => {
  const { itemArray, img }:DropdownProps = props;
  const items: MenuProps['items'] = Array.from(itemArray, (el:DropdownType) => ({
    label: <Link href={el.link}>{el.label}</Link>,
    key: el.key,
  }));
  items.push({
    label: <button type="submit" onClick={() => { signOut(); }}>Sign Out</button>,
    key: '',
  });

  return (

    <Dropdown menu={{ items }} trigger={['click']}>
      <Space>
        <div className="relative rounded-full  border-2 object-contain w-14 h-14">
          <Image src={img} fill alt="user" className=" object-contain object-center rounded-full" />
        </div>
      </Space>
    </Dropdown>
  );
};

export default Dropdown;
