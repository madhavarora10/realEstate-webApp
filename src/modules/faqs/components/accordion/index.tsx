/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

interface AccordionProps {
  header: React.ReactNode
  body: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ header, body }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');
  }

  return (
    <div className="  py-3 pl-6 pr-4 flex flex-col">
      <span
        className=" overflow-hidden box-border appearance-none cursor-pointer focus:outline-none flex gap-4 items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className=" font-inter font-wt-400 text-fs-1.25 leading-6 text-black inline-block ">{header}</p>
        <div className={`${rotate} inline-block text-fs-1.5`}>
          <HiChevronDown />
        </div>
      </span>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className=" pt-4 pb-10">{body}</div>
      </div>
    </div>
  );
};
export default Accordion;
