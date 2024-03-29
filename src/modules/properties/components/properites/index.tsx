/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import _ from 'lodash';
import React, { useState, Suspense } from 'react';
import { Input } from 'antd';
import { SubHeading } from '../../../../common/components/Headings/SubHeading';
import { ArrayObjectsType } from '../../../../common/types/hero';
import { CardBasic } from '../../../../common/components/Card/CardBasic';
import { getAllProperties } from '../../../../../libs/getData';
import { Loading } from "../../Loading";
import { MapAll } from "../../../../common/googleMap";
import { CardMap } from "../../../../common/components/Card/CardMap";

type PropertiesPageProps = {
  heros: any
};

// type functionType = (...arrgs:any) => ReactNode;

// const iconFunc :functionType = (icons:any) => {
//   switch (icons) {
//     case 'check': {
//       return (<PiCheckFatFill />);
//     }
//     case 'lighting': {
//       return (<FaBoltLightning />);
//     }
//     case 'cross': {
//       return (<ImCross />);
//     }
//     default: {
//       return 0;
//     }
//   }
// };

const PropertiesPage = (props: PropertiesPageProps) => {
  const {
    heros,
  } = props;
  const [searchValue, setSearchvalue] = useState('');
  const [mapView, setMapView] = useState(false);
  const [cardData, setCardData] = useState<any>();
  const [coordsData, setCoordsData] = useState<any>();
  const coords:Array<Array<number>> = [];
  const { Search } = Input;
  const handleClick = () => {
    setMapView(!mapView);
    // console.log(mapView);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (userInput) => {
    const data = await getAllProperties(userInput);
    // console.log('from docs', data);
    setCardData(data);
    await data.docs?.map((el) => (
      coords.push(el.coordinates)
    ));
    setCoordsData(coords);
  };
  const onSearch = (value: string) => setSearchvalue(value);
  // console.log(heros)
  if (_.isEmpty(heros) === true) {
    return null;
  }
  if (heros.status === 0) {
    return null;
  }
  return (
    <div>
      <div className="flex gap-y-6 lg:gap-y-0 flex-col lg:flex-row lg:justify-between lg:items-center">
        <SubHeading textContent={heros.heading} />
        <Search placeholder={heros.searchBar.placeholder} onSearch={onSearch} style={{ width: 200 }} />
      </div>
      <div className=" mt-8 flex justify-between bg-white p-4 drop-shadow-box2">
        <form className="flex flex-wrap items-center justify-between w-full" onSubmit={handleSubmit(onSubmit)}>
          {heros.searchNav.body.map((el:ArrayObjectsType, index:number) => (
            <div key={index} className="flex flex-col">
              <span className=' pl-4 text-descp-color text-fs-1 font-wt-400 font-primaryRegular break-normal cursor-pointer"'>{el.label}</span>
              <select className=" pl-4 outline-none rounded-xl py-1 border-2 border-sky-100 w-36 text-descp-color" defaultValue={el.placeholder} {...register(el.apiLabel)}>
                {el.options.map((option:any, i:number) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>

                ))}

              </select>
            </div>
          ))}
          <input style={{ backgroundColor: '#69B99D' }} type="submit" className="flex drop-shadow-md hover:drop-shadow-none justify-center items-center border-none font cursor-pointer mt-4 lg:mt-0   text-white   transition-colors  px-5 py-3 rounded-2xl leading-6 m-0 text-fs-0.875 font-wt-400 font-inter break-normal cursor-pointe bg-primary" />

        </form>
      </div>
      {cardData ? <button className=" mt-12 text-primary flex justify-center items-center p-1 rounded-md cursor-pointer border-e3e3e3 border-2  text-fs-0.875 bg-F7f7FD" onClick={handleClick}>{heros.viewMapButton}</button> : ""}
      {mapView ? (
        <div className=" flex flex-col  lg:flex-row mt-12 gap-0">
          <div className=" w-full lg:w-1/2 h-110">
            <MapAll coordinatesArray={...coordsData} />
          </div>
          <div className=" w-full lg:pt-0 pt-10 lg:w-1/2 pl-0 lg:pl-12 flex flex-col lg:items-center gap-y-12">
            {cardData?.docs?.map((el, index:number) => (
              <div className=" w-full justify-center" key={index}>
                <Suspense fallback={<Loading />}>
                  <CardMap {...el} />
                </Suspense>
              </div>
            ))}
          </div>

        </div>
      ) : (
        <div className="pt-8  justify-center flex flex-wrap gap-12">

          {cardData?.docs?.map((el, index:number) => (
            <div key={index}>
              <Suspense fallback={<Loading />}>
                {/*  @ts-ignore */}
                <CardBasic {...el} />
              </Suspense>
            </div>
          ))}

        </div>
      ) }
    </div>
  );
};

export default PropertiesPage;
