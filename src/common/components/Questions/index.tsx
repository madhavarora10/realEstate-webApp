/* eslint-disable react/no-array-index-key */
import _ from 'lodash';
import React from 'react';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import Accordion from './accordion';

type QuestionsProps = {
  heros: any
};

const QuestionsComponent = (props: QuestionsProps) => {
  const {
    heros,
  } = props;
  // console.log(heros)
  if (_.isEmpty(heros) === true) {
    return null;
  }

  return (
    <div>
      <div className=" hidden max-w-3xl px-20 mx-auto pt-20 lg:flex justify-center py-24   bg-F5F7FB mt-32 ">
        <div className=" w-fit flex gap-4 justify-start  flex-col ">
          <h1 className=" font-inter font-wt-500 text-fs-1 leading-6 text-1463FF">{heros?.relevantHeading}</h1>
          <div className=" mt-3 font-primary font-wt-700 text-fs-3 leading-[56px] text-black ">
            <h1 className="inline">{heros.boldHeading?.part1}</h1>
            <span style={{ borderRadius: '50%' }} className=" text-white ml-3 px-6 bg-005DFF">?</span>
            <h1 className="inline ml-2">{heros.boldHeading?.part2}</h1>
            <h1 className=" ml-2">{heros.boldHeading?.part3}</h1>
          </div>
          <div className="">
            {heros.questions?.map((el: any, index: any) => (
              <div key={index} className=" bg-white drop-shadow-box2 mx-2 my-4 rounded-xl p-2">
                <Accordion header={el.ques} body={el.ans} />
              </div>
            ))}
          </div>
          <div className="m-auto font-inter font-wt-500 text-fs-1 leading-6 px-6 py-4 drop-shadow-box2 bg-white rounded-xl mt-4 cursor-pointer">
            <Link href={heros.button?.link || ''}>
              <span className="flex gap-2 justify-center items-center">
                {heros.button?.text}
                <BiChevronRight fontSize="24px" />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsComponent;
