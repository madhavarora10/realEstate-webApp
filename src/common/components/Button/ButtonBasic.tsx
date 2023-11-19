/* eslint-disable react/require-default-props */
/* eslint-disable max-len */

import Link from 'next/link';

type ButtonTypes = {
  addOnAfter?:React.ReactNode,
  textContent?:string,
  className?:string,
  href?:string | any,
  type?:string,
  onClick?:()=>void
};
const ButtonBasic = (props: ButtonTypes) => {
  const {
    className,
    textContent,
    href,
    addOnAfter,
    onClick,
    type,
  } = props;
  return (
    <Link type={type} href={href || ''}>
      <span className={`inline-flex justify-between items-center ${className}`}>
        <span className="w-full">{textContent}</span>
        <span>{addOnAfter}</span>
      </span>
    </Link>
  );
};

export default ButtonBasic;
